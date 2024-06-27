export default function PostTitle({ children }) {
  return (
    <h1 className="mb-12 text-center text-6xl font-bold leading-tight tracking-tighter md:text-right md:text-7xl md:leading-none lg:text-8xl text-wrap">
      {children}
    </h1>
  )
}
