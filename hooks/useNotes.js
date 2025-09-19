import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../firebase"; // make sure naa kay firebase.js nga nag export db

export const useNotes = () => {
  const notesCollection = collection(db, "notes");

  // Add new note
  const addNote = async (note) => {
    try {
      await addDoc(notesCollection, { text: note, createdAt: new Date() });
    } catch (error) {
      console.error("Error adding note:", error);
    }
  };

  // Get all notes
  const getNotes = async () => {
    try {
      const snapshot = await getDocs(notesCollection);
      return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    } catch (error) {
      console.error("Error fetching notes:", error);
      return [];
    }
  };

  return { addNote, getNotes };
};
