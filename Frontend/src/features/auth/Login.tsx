export function Login() {
  return (
    <div className="max-w-sm mx-auto mt-10">
      <h1 className="text-xl font-bold mb-4">Login</h1>
      <form className="space-y-3">
        <input className="border rounded w-full p-2" placeholder="Email" />
        <input className="border rounded w-full p-2" placeholder="Password" type="password" />
        <button className="w-full rounded bg-black text-white py-2">Sign in</button>
      </form>
    </div>
  )
}
