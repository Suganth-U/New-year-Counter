const Days=document.querySelector("#Days");
      const Hours=document.querySelector("#Hours");
      const Minutes=document.querySelector("#Minutes");
      const Seconds=document.querySelector("#Seconds");
      
      function updatetime(){
         const currentYear=new Date().getFullYear();
         const newYear=new Date(`January1 ${currentYear + 1} 00:00:00`);
         const currentdate=new Date();
         const diff=newYear-currentdate;
         const d=Math.floor(diff/1000/60/60/24)
         const h=Math.floor((diff/1000/60/60)%24);
         const m=Math.floor((diff/1000/60)%60);
         const s=Math.floor((diff/1000)%60);
         Days.innerHTML=d<10?"0"+d:d;
         Hours.innerHTML=h<10?"0"+h:h;
         Minutes.innerHTML=m<10?"0"+m:m;
         Seconds.innerHTML=s<10?"0"+s:s
      }
      
      updatetime();
      setInterval(updatetime,1000);