import TypewriterComponent from "typewriter-effect"

export const Type = () => {
  return (
    <div className="TypeEffect">
        <TypewriterComponent
                options={{
                        strings: ["Web Developer", " .NET Developer", "Engineering Student"],
                        autoStart: true,
                        loop: true,
                        delay: 70,
                        deleteSpeed: 20,
                }}
        />
    </div>
  )
}
