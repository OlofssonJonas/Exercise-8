    console.log("hej");


    const btn = document.querySelector("button");

    btn.addEventListener("click", function(){
        const input = document.querySelector("input");
        const transformed = input.value.toUpperCase()
        input.value = transformed;
    });
    