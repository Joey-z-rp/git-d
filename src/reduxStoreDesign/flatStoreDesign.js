const notFlattenedStore = {
    courses: [
        {
            id: "REACT001",
            name: 'React Course',
            students: [
                {
                    id: 123,
                    name: 'John',
                },
                {
                    id: 456,
                    name: 'Sam',
                },
            ],
        },
    ],
    students: [
        {
            id: 123,
            name: 'John',
            courses: [
                {
                    id: 'REACT001',
                    name: 'React Course',
                    students: [
                        {
                            id: 123,
                            name: 'John',
                        },
                        {
                            id: 456,
                            name: 'Sam',
                        },
                    ],
                },
            ],
        },
        {
            id: 456,
            name: 'Sam',
            courses: [
                {
                    id: 'REACT001',
                    name: 'React Course',
                    students: [
                        {
                            id: 123,
                            name: 'John',
                        },
                        {
                            id: 456,
                            name: 'Sam',
                        },
                    ],
                },
            ],
        },
    ],
};

const flattenedStore = {
    entities: {
        course: {
            REACT001:  {
                id: 'REACT001',
                name: 'React Course',
                studentIds: [
                    123,
                    456
                ],
            },
        },
        student: {
            123: {
                id: 123,
                name: 'John',
                courseIds: [1],
            },
            456: {
                id: 456,
                name: 'Sam',
                courseIds: [1],
            },
        },
    },
    courses: ['REACT001'],
    studnets: [123, 456]
};