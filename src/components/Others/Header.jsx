function Header({ data }) {
    const username = data ? data.name : "Admin";
    function handleLogout()
    {
        localStorage.setItem('loggedInUser' , '') ;
        window.location.reload() ;
    }
    return (
        <div className="flex items-end justify-between p-4">
            <h1 className="text-2xl font-medium">
                Hello,<br />
                <span className="text-3xl font-bold">
                    {username} 👋
                </span>
            </h1>

            <button onClick={handleLogout} className="bg-red-600 text-lg text-white px-4 py-2 rounded-md hover:bg-gray-200 hover:text-red-600">
                Log out
            </button>
        </div>
    );
}

export default Header;