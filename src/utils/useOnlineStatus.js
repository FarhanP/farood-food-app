import { useEffect, useState } from "react";

const useOnlineStatus = () => {
    const [onlineStatus, setOnline] = useState(true);
    useEffect(()=>{

        window.addEventListener('online', ()=>{
            setOnline(true);
        });

        window.addEventListener('offline', ()=>{
            setOnline(false);
        });

    },[])

  return onlineStatus;
};

export default useOnlineStatus;
