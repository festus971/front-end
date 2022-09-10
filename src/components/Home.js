import React from "react";

function Home() {
    return (
        <div>
             <figure class="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
        {/* <img class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="/sarah-dayan.jpg" alt="" width="384" height="512"> */}
        <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
          <blockquote>
            <p class="text-lg font-medium">
              “CarHire Development Trust is a qualified supplier that provide their best carhire price quote for the cars available.”
            </p>
          </blockquote>
          <figcaption class="font-medium">
            <div class="text-sky-500 dark:text-sky-400">
              Festus
            </div>
            <div class="text-slate-700 dark:text-slate-500">
              Staff Engineer, Kenya
            </div>
          </figcaption>
        </div>
      </figure></div>
    )
    
}
export default Home;