import { useState, useEffect } from "react";
import {
  getDoc,
  setDoc,
  updateDoc,
  increment,
  onSnapshot,
  doc,
  arrayUnion,
} from "firebase/firestore";
import { db } from "../services/firebaseConfig";
import VisitorStats from "./VisitorStats";
import fetchLocation from "../services/AllOtherAPIs";

const VisitorCount = () => {
  const [visitorCount, setVisitorCount] = useState(0);
  const [currentLocation, setCurrentLocation] = useState("Fetching...");
  const [lastLocation, setLastLocation] = useState("Unknown");

  useEffect(() => {
    const countDocRef = doc(db, "users", "count");

    // Listen for real-time updates
    const unsubscribe = onSnapshot(countDocRef, (docSnap) => {
      if (docSnap.exists()) {
        setVisitorCount(docSnap.data().count || 0);
        setLastLocation(docSnap.data().lastLocation || "Unknown");
      }
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const registerVisitor = async () => {
      try {
        const { ip, location: userLocation } = await fetchLocation();
        setCurrentLocation(userLocation);

        const globalCountRef = doc(db, "users", "count");
        const globalCountSnap = await getDoc(globalCountRef);

        if (globalCountSnap.exists()) {
          const ipArray = globalCountSnap.data().ipArray || [];

          if (!ipArray.includes(ip)) {
            await updateDoc(globalCountRef, {
              ipArray: arrayUnion(ip),
              count: increment(1),
              lastLocation: userLocation,
            });

            const userDocRef = doc(db, "users", ip);
            await setDoc(userDocRef, {
              ip,
              location: userLocation,
              timestamp: new Date(),
              count: 1,
            });
          } else {
            const userDocRef = doc(db, "users", ip);
            await updateDoc(userDocRef, { timestamp: new Date() });
          }
        } else {
          await setDoc(globalCountRef, {
            count: 1,
            ipArray: [ip],
            lastLocation: userLocation,
          });

          const userDocRef = doc(db, "users", ip);
          await setDoc(userDocRef, {
            ip,
            location: userLocation,
            timestamp: new Date(),
            count: 1,
          });
        }
      } catch (error) {
        console.error("Error registering visitor:", error);
      }
    };

    registerVisitor();
  }, []);

  return (
    <VisitorStats
      visitorCount={visitorCount}
      currentLocation={currentLocation}
      lastLocation={lastLocation}
    />
  );
};

export default VisitorCount;
