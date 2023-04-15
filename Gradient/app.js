const colorInputs = document.querySelectorAll('.colors input');
const gradientBox = document.querySelector('.gradient-box');
const textArea = document.querySelector('textarea');
const direction = document.querySelector('.select-box select');
const refreshBtn = document.querySelector('.refresh');
const copyBtn = document.querySelector('.copy')


colorInputs.forEach((input) => {
    //  Generate a new gradient any time the user has selected a new color
    input.addEventListener("input", () => generateGradient(false))
});

//  Update the gradient box any time the direction changes
direction.addEventListener('change', () => generateGradient(false));


//  Generate random colors on refresh
refreshBtn.addEventListener("click", () => generateGradient(true))


//  Copy the gradient to clipBoard
copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(textArea.innerHTML);
    copyBtn.textContent = "Copied";
    setTimeout(() => {
        copyBtn.textContent = "Copy Code";
    }, 2000)
})



//  Functions
function generateGradient(isRandom)
{

    if (isRandom)
    {
        //  If isRandom is true, generate random colors for the inputs
        colorInputs[0].value = getRandomColor();
        colorInputs[1].value = getRandomColor();
    }
    const gradient = `linear-gradient(${direction.value}, ${colorInputs[0].value}, ${colorInputs[1].value})`;
    gradientBox.style.background = gradient;
    textArea.textContent = `background: ${gradient};`
}


function getRandomColor()
{
    const randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
    return `#${randomHex}`;
}