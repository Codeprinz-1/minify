 
        const select = (e, second) => {
            const form1 = document.getElementsByClassName('form1')
            const form2 = document.getElementsByClassName('form2')
            e.classList.add('selected')
            document.getElementsByClassName(second)[0].classList.remove('selected')
            if (second == 2) {
                form2[0].classList.add('d-none')
                form1[0].classList.remove('d-none')
            } else {
                form1[0].classList.add('d-none')
                form2[0].classList.remove('d-none')
            }
        }

        const createSlug = (e) => {
        }

        const extendSlug = (e) => {

        }