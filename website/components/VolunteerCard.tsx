import { type Service } from '@prisma/client'

interface VolunteerCardI {
    servicesId: string
}

const VolunteerCard: React.FC<VolunteerCardI> = ({ servicesId }) => {
    return <div>{servicesId}</div>
}

export default VolunteerCard
