import { collection, getDocs, query, orderBy } from "firebase/firestore"
import { db } from "./firebase"
import type { Timestamp } from "firebase/firestore"

export interface Event {
  id: string
  title: string
  date: string
  description: string
  imageUrl: string[]
  resourcePerson: string
  createdAt?: Timestamp
  // Additional fields for upcoming events
  poster?: string
  venue?: string
  time?: string
  attendees?: number
  category?: string
  featured?: boolean
}

export async function getPastEvents(): Promise<Event[]> {
  try {
    const eventsRef = collection(db, "events")
    const q = query(eventsRef, orderBy("createdAt", "desc"))
    const querySnapshot = await getDocs(q)

    const events: Event[] = []
    querySnapshot.forEach((doc) => {
      const data = doc.data()
      events.push({
        id: doc.id,
        title: data.title || "",
        date: data.date || "",
        description: data.description || "",
        imageUrl: data.imageUrl || [],
        resourcePerson: data.resourcePerson || "",
        createdAt: data.createdAt,
      })
    })

    return events
  } catch (error) {
    console.error("Error fetching events:", error)
    return []
  }
}

export async function getUpcomingEvents(): Promise<Event[]> {
  try {
    const eventsRef = collection(db, "upcoming_events")
    const querySnapshot = await getDocs(eventsRef)

    const events: Event[] = []
    querySnapshot.forEach((doc) => {
      const data = doc.data()

      // Map Firestore fields to Event interface
      events.push({
        id: doc.id,
        title: data.title || doc.id, // Use title field from database, fallback to document ID
        date: data.date || "",
        description: data.description || "",
        imageUrl: data.poster ? [data.poster] : [], // Convert poster URL to imageUrl array
        resourcePerson: data["resource-person"] || "", // Handle hyphenated field name
        poster: data.poster || "",
        venue: data.venue || "",
        category: determineCategory(data.title || doc.id, data.description),
        featured: Math.random() > 0.7, // Randomly feature some events
      })
    })

    // Sort by date (assuming DD/MM/YYYY format)
    return events.sort((a, b) => {
      const dateA = parseDate(a.date)
      const dateB = parseDate(b.date)
      return dateA.getTime() - dateB.getTime()
    })
  } catch (error) {
    console.error("Error fetching upcoming events:", error)
    return []
  }
}

// Helper function to parse DD/MM/YYYY date format
function parseDate(dateString: string): Date {
  if (!dateString) return new Date()

  const parts = dateString.split("/")
  if (parts.length === 3) {
    // Assuming DD/MM/YYYY format
    const day = Number.parseInt(parts[0], 10)
    const month = Number.parseInt(parts[1], 10) - 1 // Month is 0-indexed
    const year = Number.parseInt(parts[2], 10)
    return new Date(year, month, day)
  }

  return new Date(dateString)
}

// Helper function to determine event category
function determineCategory(title: string, description = ""): string {
  const text = (title + " " + description).toLowerCase()

  if (text.includes("workshop")) return "Workshop"
  if (text.includes("hackathon")) return "Competition"
  if (text.includes("conference")) return "Conference"
  if (text.includes("summit")) return "Summit"
  if (text.includes("dbms")) return "Workshop"

  return "Event"
}
