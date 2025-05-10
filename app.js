const body = document.body;
        const output = document.getElementById('output');

        //background color
        document.getElementById('bgColorPicker').addEventListener('input', (e)=>{
            body.style.backgroundColor = e.target.value;
        });

        document.getElementById('textColorPicker').addEventListener('input', (e)=>{
            output.style.color = e.target.value;
        });

        document.getElementById('fontSizeSlider').addEventListener('input', (e)=>{
            output.style.fontSize = e.target.value + 'px';
        });

        document.getElementById('FontFamilySelector').addEventListener('change', (e)=>{
            output.style.fontFamily = e.target.value;
        });

        document.getElementById('darkModeToggle').addEventListener('change', (e)=>{
            if(e.target.checked){
                body.style.backgroundColor = '#222';
                body.style.color = '#f0f0f0';
            }else{
                body.style.backgroundColor = 'white';
                body.style.color = 'black';
            }
        });