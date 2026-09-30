
import DashboardSidebar from '@/components/DashboardSidebar';


const DashboardLayout = ({ children }) => {


    return (
        <div className="flex min-h-screen">
            <DashboardSidebar />
            <div className="flex-grow overflow-y-auto">
                {children}
            </div>
        </div>
    );
}

export default DashboardLayout;
