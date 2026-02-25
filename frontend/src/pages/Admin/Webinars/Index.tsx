import { AdminWebinars, type TProps } from "@widgets/admin-webinars"
import { AdminLayout } from "../components/AdminLayout"

const Interview = ({ webinars }: TProps) => {
    return <AdminWebinars webinars={webinars}/>
}

Interview.layout = (page: React.ReactNode) => <AdminLayout>{page}</AdminLayout>

export default Interview