export function BlogWrite(){
    const color = 'black';
    const textrows = 17;
    return(
        <div>
            <div className="w-full">
            <div className=" bg-white p-5 flex justify-center items-center">
                    <div className="flex justify-center items-center">
                    <div className="w-7 h-7">
                        <svg viewBox="0 0 282 282" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="141" cy="141" r="131.5" stroke={color} strokeWidth="19"/>
                    <path d="M132.271 132.271L123.543 141H106.503C106.769 122.067 122.067 106.769 141 106.503V123.543L132.271 132.271ZM106.503 142H123.543L132.271 150.729L141 159.457V176.496C122.067 176.231 106.769 160.933 106.503 142ZM142 123.543V106.503C160.933 106.769 176.231 122.067 176.496 141H159.457L150.729 132.271L142 123.543ZM159.457 142H176.496C176.231 160.933 160.933 176.231 142 176.496V159.457L150.729 150.729L159.457 142ZM142 133.125H149.168L142 140.293V133.125ZM141 133.125V140.293L133.832 133.125H141ZM133.125 149.168V142H140.293L133.125 149.168ZM133.832 149.875L141 142.707V149.875H133.832ZM149.168 149.875H142V142.707L149.168 149.875ZM149.875 149.168L142.707 142H149.875V149.168ZM149.875 133.832V141H142.707L149.875 133.832ZM133.125 133.832L140.293 141H133.125V133.832Z" fill={color} stroke={color}/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M172.656 97.4286L141 0L109.344 97.4286H6.90103L89.7787 157.643L58.1223 255.071L141 194.857L223.878 255.071L192.221 157.643L275.099 97.4286H172.656ZM172.656 97.4286H109.344L89.7787 157.643L141 194.857L192.221 157.643L172.656 97.4286Z" fill={color}/>
                        </svg>
                    </div>
                    <div className="text-black ml-2 text-2xl font-lobster">
                        SafeSage
                    </div>
                    </div>
                </div>
            </div>
            <div className="w-full flex px-20 py-5 pb-0">
                <div className="absolute -translate-x-full py-2">Title</div>
                <input type="text " name="" id="" placeholder="Title" className=" outline-none w-screen translate-x-5 p-2 border-2 border-gray-300 border-solid rounded-md"/>
            </div>
            <div className="w-full flex px-20 py-5 pb-0">
                <div className="absolute -translate-x-full py-2">Content</div>
                <textarea name="" id="" rows={textrows} className=" outline-none w-screen translate-x-5 p-2 h-fit border-2 border-gray-300 border-solid rounded-md" placeholder="Tell your story..."/>
            </div>
        </div>
    )
}