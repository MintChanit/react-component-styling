// Start coding here

function Button({type}) {
    const primary = "!bg-[#074EE8] text-white w-[171.19px] h-[50px] px-4 mb-3"
    const secondary = "!bg-[#07A4E8] text-white w-[171.19px] h-[50px] px-4 mb-3"
    return(
        
        
        <button className = {type === "primary"? primary:secondary}>Button</button>
        
        
    )
}
export default Button
