import PageLayout from "./components/PageLayout";
import Header from "./components/Header";
import EmployeeDirectory from "./components/EmployeeDirectory";
import Footer from "./components/Footer";
import EmployeeBio from "./components/EmployeeBio";
import CompanyInfo from "./components/CompanyInfo";
import DepartmentBadge from "./components/DepartmentBadge";
import Card from "./components/Card";
import employees from "./data/employees";

function App() {
  const company = {
    name: "TechNova Solutions",
    address: {
      city: "Bengaluru",
      country: "India",
    },
  };

  return (
    <PageLayout>
      <Header
        title="Employee Directory"
        subtitle="Meet our team members"
      />

      <main>
        <EmployeeDirectory employees={employees} />

        <section className="demo-section" aria-label="React fundamentals demonstrations">
          <h2>React Fundamentals Demonstrations</h2>
          <CompanyInfo company={company} />
          <div  className="practice-grid"  style={{display:"flex" , flexWrap:"wrap"}}>
          <EmployeeBio name="Priya Sharma"  bio="Builds accessible and reusable frontend experiences." experience="3+ years experience" />
          <EmployeeBio name="New Employee"  />
          
          <Card
            className="employee-wrapper"
            id="employee-list"
            data-testid="employee-list"
          >
           <strong>Children + Rest Props</strong><p>This card receives children and forwards extra props to its root element.</p>
          </Card>
          </div>
        </section>
      </main>

      <Footer companyName={company.name} />
    </PageLayout>
  );
}

export default App;