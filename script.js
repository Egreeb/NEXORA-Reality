    const form = document.getElementById("leadform")
    const fullName = document.getElementById("name")
    const email = document.getElementById("email")
    const mobile = document.getElementById("mobile")
    const errMsg = document.getElementById("error")
    const PopUp =  document.getElementById("thankYouPopup")
    const submitBtn = document.getElementById("submitBtn")
    const project = document.getElementById("project")
    const budget = document.getElementById("budget")

    let isloading = false

    form.addEventListener('submit', async(e)=>{
        e.preventDefault()
        const message = []
        if(fullName.value === "" || fullName.value === null){
            message.push("Name is Required")
        }
        if(email.value === "" || email.value === null){
            message.push("Email is Required")
        }
        if(mobile.value === "" || mobile.value === null){
            message.push("Phone is Required")
        }
        if(message.length > 0){
            errMsg.innerText = message.join(' & ')
            return;
        }
        isloading = true
        submitBtn.disabled = true,
        submitBtn.innerHTML = 
        `
        <span class="spinner-border spinner-border-sm me-2"></span> Submitting...
        `
        try {
            const response = await fetch("https://nexora-leads-api.onrender.com/api/leads/addLeads", 
                {
                    method:'POST',
                    headers:{
                        "Content-Type": "application/json"
                    },
                    body:JSON.stringify({
                        fullName: fullName.value,
                        email: email.value,
                        mobile: mobile.value,
                        project: project.value,
                        budget: budget.value,
                    })
                });
                const data = await response.json();
                if(data.success){
                    form.reset()
                    errMsg.innerText =""
                    PopUp.style.display = "flex"
                }
        } catch (error) {
            console.log(error)
            errMsg.innerText = "Something went wrong!";

        }finally{
            isloading = false
            submitBtn.disabled = false,
            submitBtn.innerHTML = "Submit Enquiry"
        }
    })
    const closePopup = ()=>{
        const PopUp =  document.getElementById("thankYouPopup")
        PopUp.style.display = "none"
    }