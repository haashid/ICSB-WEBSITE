import { collection, getDocs, query, orderBy, type Timestamp } from "firebase/firestore"
import { db } from "./firebase"

export interface Event {
  id: string
  title: string
  date: string
  description: string
  imageUrl: string[]
  resourcePerson: string
  createdAt: Timestamp
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
