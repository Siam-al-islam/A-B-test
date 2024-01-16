(function pollFor() {

    const init = () => {
        let userData = {};
        const anchorPoint = document.querySelector(".feed-follows-module");
        anchorPoint.classList.add("hide");

        const htmlStr =
            `<div class="form-container">
		    	<div class='header-wrapper'>
		    		<span class='header-text'>Multi-Step Form</span>
		    		<span class='header-count' data-count="1">
		    		1
		    		</span>
		    	</div>
		    	
		        <div class="input-container">
		            <input class="input-field" type="text" data-firstName placeholder="First Name">
		            <input class="input-field" type="text" data-lastName placeholder="Last Name">
		            <input class="input-field" type="email" data-email placeholder="Email">
		        </div>
		        <div class="next-btn-wrapper">
		            <button class="next-btn">Next</button>
		        </div>
		    </div>`

        anchorPoint.insertAdjacentHTML('beforebegin', htmlStr);

        //dry: don't repeat yourself...........
        const counter = () => {
            const headerCountElem = document.querySelector(".header-count");

            const dataCount = Number(headerCountElem.dataset.count); // 1
            const domCountValue = Number(headerCountElem.textContent); // 1

            const totalCount = dataCount + domCountValue; // 1 + 1 = 2

            return totalCount; // 2
        }

        const getInputData = () => {
            const allInputdata = document.querySelectorAll(".input-field");
            allInputdata.forEach((eachInputElem) => {
                eachInputElem.addEventListener('input', (e) => {
                    eachInputElem.value = e.target.value;
                    const inputLength = e.target.value.length;
                    const inputField = e.target;

                    if(inputLength < 4){
                        inputField.classList.add("error");
                        if(document.querySelector(".error-text")) return;
                        inputField.insertAdjacentHTML("afterend", `<span class="error-text">First name at least 4 characters</span>`)
                    }
                    else{
                        inputField.classList.remove("error")
                        document.querySelector(".error-text").style.display="none";
                    }
                })
            })
        }

        getInputData();

        const checkLength = (inputElem) => {
            if (inputElem.value.length > 0) {
                return true;
            }
            return false;
        }

        const nextBtnHandler = () => {
            const nextBtn = document.querySelector(".next-btn");
            nextBtn.addEventListener('click', () => {
                const firstName = document.querySelector("[data-firstName]");
                const lastName = document.querySelector("[data-lastName]");
                const email = document.querySelector("[data-email]");
                
                const isEnabled = checkLength(firstName) && checkLength(lastName) && checkLength(email);

                if (!isEnabled) return;

                const countValue = counter();
                document.querySelector(".header-count").textContent = countValue;

                userData = {
                    ...userData,
                    firstName: firstName.value,
                    lastName: lastName.value,
                    email: email.value
                };
                console.log("userData:", userData)
            })
        }
        nextBtnHandler();
    }

    if (document.querySelector(".feed-follows-module")) {
        init();
    } else {
        setTimeout(pollFor, 25);
    }
})();
