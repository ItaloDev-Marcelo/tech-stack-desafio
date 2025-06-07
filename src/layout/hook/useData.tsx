
type DataType = {
    id:number
    bubbleTitle: string,
    username: string ,
    position: string
}


const FrontData:DataType[] = [
  {
         id: 1,
         bubbleTitle: 'A',
         username:'Alex Johnson' ,
         position: 'Senior React Developer'
    },
     {
         id: 2,
         bubbleTitle:'M' ,
         username: 'Mia Chen',
         position: 'UI Developer'
    },
     {
         id: 3,
         bubbleTitle:'S' ,
         username: 'David Park',
         position: 'Javascript Specialist'
    },
     {
         id: 4,
         bubbleTitle:'D' ,
         username: 'Sarah Miller',
         position: 'Frontend Lead'
    },
]

const BackData:DataType[] = [
     {
         id: 1,
         bubbleTitle:'J' ,
         username: 'James Wilson',
         position: 'Node.js Developer'
    },
     {
         id: 2,
         bubbleTitle:'O' ,
         username: 'Olivia Martinez',
         position: 'Database Administrator'
    },
     {
         id: 3,
         bubbleTitle:'R' ,
         username: 'Robert Taylor',
         position: 'API Architect'
    },
     {
         id: 4,
         bubbleTitle:'E' ,
         username: 'Emily Brown',
         position: 'Backend Lead'
    },
]

const FullData:DataType[] = [
     {
         id: 1,
         bubbleTitle: 'D',
         username: 'Daniel Lee',
         position: 'MERN Stack Developer'
    },
     {
         id: 2,
         bubbleTitle:'S' ,
         username: 'Sophia Garcia',
         position: 'Full Stack Engineer'
    },
     {
         id: 3,
         bubbleTitle:'M' ,
         username: 'Michael Rodiguez',
         position: 'DevOps Specialist'
    }
]

const UIUXData:DataType[] = [
     {
         id: 1,
         bubbleTitle:'E' ,
         username: 'Emma Thompson',
         position: 'Ux Resercher'
    },
     {
         id: 2,
         bubbleTitle:'W' ,
         username: 'William Davis',
         position: 'UI Designer'
    },
     {
         id: 3,
         bubbleTitle:'A' ,
         username: 'Ava Wilson',
         position: 'Interaction Designer'
    },
     {
         id: 4,
         bubbleTitle:'N' ,
         username: 'Noah Martin',
         position: 'Design Systen Lead'
    }
]


export default function UseData(){
      return {
        FrontData,
        BackData,
        FullData,
        UIUXData
      }
}