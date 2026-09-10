function CompanyInfo({
  company: {
    name,
    address: { city, country },
  },
}) {
  return <p>{name} is located in {city}, {country}.</p>;
}

export default CompanyInfo;