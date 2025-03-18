document.getElementById("login-btn").addEventListener("click",
    function (event)
    {
        event.preventDefault();
        const PIN = document.getElementById("pin").value;
        const NAME = document.getElementById("name").value;

        console.log(`PIN: ${PIN}, Name: ${NAME}`);

        if (PIN == "" && NAME.length < 1)
        {
            Swal.fire({
                title: "Empty Form!!",
                html: `<p class="eng-font">Please enter your name and PIN.</p>`,
                icon: "question"
              });
            return;
        }
        else if (NAME.length < 1)
        {
            Swal.fire({
                title: "Oops...",
                html: `<p class="eng-font">Please enter a valid name to login. Thank you.<br><br>
                        <strong>Example:</strong> Saybal Roy, Anis</p>`,
                icon: "error"
              });
            return;
        }
        else if (PIN == "")
        {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                html: `<p class="eng-font">Please enter your PIN to login. Thank you.<br><br>
                        <strong>Example:</strong> 123456, 5685749</p>`,
            });
                
            return;
        }
        else if (PIN != 123456)
        {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                html: `<p class="eng-font">Your PIN is wrong! Please contact our Admin to get the correct PIN. Thank you.</p>`,
                footer: '<a href="https://www.facebook.com/jhankarmahbubshow?mibextid=rS40aB7S9Ucbxw6v" style="color: #3085d6; text-decoration: none; font-weight: bold;">Contact Admin</a>'
              });
            
            return;
        }
        else
        {
            let timerInterval;
            Swal.fire({
                title: `<p class="flex items-center Kalo eng-font font-semibold text-xl justify-center text-center">Welcome to English <img src="assets/logo.png" alt=""><span class="ban-font-2 font-normal">জানালা</span></p>
                    <p class="ban-font-2 Kalo eng-font font-semibold text-xl my-1">ইংরেজি শিখুন সহজে</p>`,
                
                html: `<div class="flex justify-center items-center gap-4">
                    <div class="eng-font font-bold text-2xl">Loading</div>
                    <div class="rounded-md h-6 w-6 border-4 border-t-4 border-blue-500 animate-spin"></div>
                    </div>`,
            timer: 4000,
            timerProgressBar: false,
            showConfirmButton: false,
           
            willClose: () => {
                clearInterval(timerInterval);
                document.getElementById("banner-page").style.display = "none";
                document.getElementById("main-page").style.display = "block";
            }
            }).then((result) => {
            /* Read more about handling dismissals below */
            if (result.dismiss === Swal.DismissReason.timer) {
                console.log("I was closed by the timer");
            }
            });
        }
            
    })

document.getElementById("log-out").addEventListener("click",
    function (event)
    {
        event.preventDefault();
        Swal.fire({
            title: "Are you sure?",
            text: "You will exit from this page!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, log out!"
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "You are logged out now.",
                text: "You can reenter our main page by entering your name and pin.",
                  icon: "success"
              });
              document.getElementById("banner-page").style.display = "none";
                document.getElementById("main-page").style.display = "block";
            }
          });
})


    // TODO: TO reload my form
    window.onload = function() {
        document.getElementById("name").value = "";
        document.getElementById("pin").value = "";
    };
    

