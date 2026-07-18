const Button = ({text}: { text: string }) => {
    return (
        <button className="bg-red-500 px-5 py-2 text-white rounded-xl hover:bg-black duration-300">
            {text}
        </button>
    )
}

export default Button;
