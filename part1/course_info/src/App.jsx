function App() {
    // const course = 'Half Stack application development'
    // const parts = [
    //     {
    //         name: 'Fundamentals of React',
    //         exercises: 10
    //     },
    //     {
    //         name: 'Using props to pass data',
    //         exercises: 7
    //     },
    //     {
    //         name: 'State of a component',
    //         exercises: 14
    //     }
    // ]

    const course = {
        name: 'Half Stack application development',
        parts: [
            {
                name: 'Fundamentals of React',
                exercises: 10
            },
            {
                name: 'Using props to pass data',
                exercises: 7
            },
            {
                name: 'State of a component',
                exercises: 14
            }
        ]
    }

    const Header = (props) => {
        const { course } = props
        return (
            <>
                <h1>{course}</h1>
            </>
        )
    }
    const Content = (props) => {
        const { parts } = props
        return (
            <>
                <Part part={parts[0]} />
                <Part part={parts[1]} />
                <Part part={parts[2]} />
            </>
        )
    }
    const Part = (props) => {
        const { part } = props
        return (
            <p>{part.name} {part.exercises}</p>
        )
    }
    const Total = (props) => {
        const { parts } = props
        return (
            <>
                <p>Number of exercises {parts[0].exercises + parts[1].exercises + parts[2].exercises}</p>
            </>
        )
    }

    return (
        <>
            <Header course={course.name} />
            <Content
                parts={course.parts}
            />
            <Total
                parts={course.parts}
            />
        </>
    )
}

export default App
