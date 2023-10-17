import React, { useState, useEffect } from 'react';
import './App.css';

const data = [
  {
    "FirstName": "John",
    "LastName": "Doe",
    "MobilePhone": "+1 (123) 456-7890",
    "WorkPhone": "+1 (234) 567-8901",
    "OfficePhone": "+1 (345) 678-9012",
    "HomePhone": "+1 (456) 789-0123",
    "Company": "ABC Inc.",
    "Email": "john.doe@abcinc.com"
  },
  {
    "FirstName": "Jane",
    "LastName": "Smith",
    "MobilePhone": "+1 (987) 654-3210",
    "WorkPhone": "+1 (876) 543-2109",
    "OfficePhone": "+1 (765) 432-1098",
    "HomePhone": "+1 (654) 321-0987",
    "Company": "XYZ Corp",
    "Email": "jane.smith@xyzcorp.com"
  },
  {
    "FirstName": "Michael",
    "LastName": "Johnson",
    "MobilePhone": "+1 (543) 210-9876",
    "WorkPhone": "+1 (432) 109-8765",
    "OfficePhone": "+1 (321) 098-7654",
    "HomePhone": "+1 (210) 987-6543",
    "Company": "123 Industries",
    "Email": "michael.johnson@123industries.com"
  },
  {
    "FirstName": "Emily",
    "LastName": "Brown",
    "MobilePhone": "+1 (234) 567-8901",
    "WorkPhone": "+1 (123) 456-7890",
    "OfficePhone": "+1 (987) 654-3210",
    "HomePhone": "+1 (876) 543-2109",
    "Company": "XYZ Corp",
    "Email": "emily.brown@xyzcorp.com"
  },
  {
    "FirstName": "David",
    "LastName": "Wilson",
    "MobilePhone": "+1 (876) 543-2109",
    "WorkPhone": "+1 (987) 654-3210",
    "OfficePhone": "+1 (123) 456-7890",
    "HomePhone": "+1 (234) 567-8901",
    "Company": "ABC Inc.",
    "Email": "david.wilson@abcinc.com"
  },
  {
    "FirstName": "Sarah",
    "LastName": "Anderson",
    "MobilePhone": "+1 (432) 109-8765",
    "WorkPhone": "+1 (210) 987-6543",
    "OfficePhone": "+1 (543) 210-9876",
    "HomePhone": "+1 (321) 098-7654",
    "Company": "123 Industries",
    "Email": "sarah.anderson@123industries.com"
  },
  {
    "FirstName": "William",
    "LastName": "Lee",
    "MobilePhone": "+1 (321) 098-7654",
    "WorkPhone": "+1 (543) 210-9876",
    "OfficePhone": "+1 (210) 987-6543",
    "HomePhone": "+1 (432) 109-8765",
    "Company": "XYZ Corp",
    "Email": "william.lee@xyzcorp.com"
  },
  {
    "FirstName": "Olivia",
    "LastName": "Garcia",
    "MobilePhone": "+1 (654) 321-0987",
    "WorkPhone": "+1 (765) 432-1098",
    "OfficePhone": "+1 (876) 543-2109",
    "HomePhone": "+1 (987) 654-3210",
    "Company": "ABC Inc.",
    "Email": "olivia.garcia@abcinc.com"
  },
  {
    "FirstName": "James",
    "LastName": "Martinez",
    "MobilePhone": "+1 (765) 432-1098",
    "WorkPhone": "+1 (654) 321-0987",
    "OfficePhone": "+1 (432) 109-8765",
    "HomePhone": "+1 (321) 098-7654",
    "Company": "123 Industries",
    "Email": "james.martinez@123industries.com"
  },
  {
    "FirstName": "Sophia",
    "LastName": "Lopez",
    "MobilePhone": "+1 (876) 543-2109",
    "WorkPhone": "+1 (234) 567-8901",
    "OfficePhone": "+1 (987) 654-3210",
    "HomePhone": "+1 (123) 456-7890",
    "Company": "XYZ Corp",
    "Email": "sophia.lopez@xyzcorp.com"
  },
  {
    "FirstName": "Benjamin",
    "LastName": "Hernandez",
    "MobilePhone": "+1 (234) 567-8901",
    "WorkPhone": "+1 (876) 543-2109",
    "OfficePhone": "+1 (765) 432-1098",
    "HomePhone": "+1 (654) 321-0987",
    "Company": "ABC Inc.",
    "Email": "benjamin.hernandez@abcinc.com"
  },
  {
    "FirstName": "Mia",
    "LastName": "Williams",
    "MobilePhone": "+1 (543) 210-9876",
    "WorkPhone": "+1 (321) 098-7654",
    "OfficePhone": "+1 (210) 987-6543",
    "HomePhone": "+1 (432) 109-8765",
    "Company": "123 Industries",
    "Email": "mia.williams@123industries.com"
  },
  {
    "FirstName": "Elijah",
    "LastName": "Taylor",
    "MobilePhone": "+1 (321) 098-7654",
    "WorkPhone": "+1 (543) 210-9876",
    "OfficePhone": "+1 (654) 321-0987",
    "HomePhone": "+1 (876) 543-2109",
    "Company": "XYZ Corp",
    "Email": "elijah.taylor@xyzcorp.com"
  },
  {
    "FirstName": "Ava",
    "LastName": "Clark",
    "MobilePhone": "+1 (654) 321-0987",
    "WorkPhone": "+1 (765) 432-1098",
    "OfficePhone": "+1 (876) 543-2109",
    "HomePhone": "+1 (987) 654-3210",
    "Company": "ABC Inc.",
    "Email": "ava.clark@abcinc.com"
  },
  {
    "FirstName": "Liam",
    "LastName": "Lewis",
    "MobilePhone": "+1 (765) 432-1098",
    "WorkPhone": "+1 (654) 321-0987",
    "OfficePhone": "+1 (432) 109-8765",
    "HomePhone": "+1 (321) 098-7654",
    "Company": "123 Industries",
    "Email": "liam.lewis@123industries.com"
  },
  {
    "FirstName": "Charlotte",
    "LastName": "Hall",
    "MobilePhone": "+1 (876) 543-2109",
    "WorkPhone": "+1 (234) 567-8901",
    "OfficePhone": "+1 (987) 654-3210",
    "HomePhone": "+1 (123) 456-7890",
    "Company": "XYZ Corp",
    "Email": "charlotte.hall@xyzcorp.com"
  },
  {
    "FirstName": "Noah",
    "LastName": "Young",
    "MobilePhone": "+1 (234) 567-8901",
    "WorkPhone": "+1 (876) 543-2109",
    "OfficePhone": "+1 (765) 432-1098",
    "HomePhone": "+1 (654) 321-0987",
    "Company": "ABC Inc.",
    "Email": "noah.young@abcinc.com"
  },
  {
    "FirstName": "Lily",
    "LastName": "Walker",
    "MobilePhone": "+1 (543) 210-9876",
    "WorkPhone": "+1 (321) 098-7654",
    "OfficePhone": "+1 (210) 987-6543",
    "HomePhone": "+1 (432) 109-8765",
    "Company": "123 Industries",
    "Email": "lily.walker@123industries.com"
  },
  {
    "FirstName": "Lucas",
    "LastName": "Adams",
    "MobilePhone": "+1 (321) 098-7654",
    "WorkPhone": "+1 (543) 210-9876",
    "OfficePhone": "+1 (654) 321-0987",
    "HomePhone": "+1 (876) 543-2109",
    "Company": "XYZ Corp",
    "Email": "lucas.adams@xyzcorp.com"
  },
  {
    "FirstName": "Grace",
    "LastName": "Parker",
    "MobilePhone": "+1 (654) 321-0987",
    "WorkPhone": "+1 (765) 432-1098",
    "OfficePhone": "+1 (876) 543-2109",
    "HomePhone": "+1 (987) 654-3210",
    "Company": "ABC Inc.",
    "Email": "grace.parker@abcinc.com"
  },
  {
    "FirstName": "Henry",
    "LastName": "Morris",
    "MobilePhone": "+1 (765) 432-1098",
    "WorkPhone": "+1 (654) 321-0987",
    "OfficePhone": "+1 (432) 109-8765",
    "HomePhone": "+1 (321) 098-7654",
    "Company": "123 Industries",
    "Email": "henry.morris@123industries.com"
  },
  {
    "FirstName": "Chloe",
    "LastName": "Cook",
    "MobilePhone": "+1 (876) 543-2109",
    "WorkPhone": "+1 (234) 567-8901",
    "OfficePhone": "+1 (987) 654-3210",
    "HomePhone": "+1 (123) 456-7890",
    "Company": "XYZ Corp",
    "Email": "chloe.cook@xyzcorp.com"
  },
  {
    "FirstName": "Jackson",
    "LastName": "Baker",
    "MobilePhone": "+1 (234) 567-8901",
    "WorkPhone": "+1 (876) 543-2109",
    "OfficePhone": "+1 (765) 432-1098",
    "HomePhone": "+1 (654) 321-0987",
    "Company": "ABC Inc.",
    "Email": "jackson.baker@abcinc.com"
  },
  {
    "FirstName": "Zoey",
    "LastName": "Bennett",
    "MobilePhone": "+1 (543) 210-9876",
    "WorkPhone": "+1 (321) 098-7654",
    "OfficePhone": "+1 (210) 987-6543",
    "HomePhone": "+1 (432) 109-8765",
    "Company": "123 Industries",
    "Email": "zoey.bennett@123industries.com"
  },
  {
    "FirstName": "Sebastian",
    "LastName": "Hall",
    "MobilePhone": "+1 (321) 098-7654",
    "WorkPhone": "+1 (543) 210-9876",
    "OfficePhone": "+1 (654) 321-0987",
    "HomePhone": "+1 (876) 543-2109",
    "Company": "XYZ Corp",
    "Email": "sebastian.hall@xyzcorp.com"
  },
  {
    "FirstName": "Avery",
    "LastName": "Bell",
    "MobilePhone": "+1 (654) 321-0987",
    "WorkPhone": "+1 (765) 432-1098",
    "OfficePhone": "+1 (876) 543-2109",
    "HomePhone": "+1 (987) 654-3210",
    "Company": "ABC Inc.",
    "Email": "avery.bell@abcinc.com"
  },
  {
    "FirstName": "Ethan",
    "LastName": "Ward",
    "MobilePhone": "+1 (765) 432-1098",
    "WorkPhone": "+1 (654) 321-0987",
    "OfficePhone": "+1 (432) 109-8765",
    "HomePhone": "+1 (321) 098-7654",
    "Company": "123 Industries",
    "Email": "ethan.ward@123industries.com"
  },
  {
    "FirstName": "Scarlett",
    "LastName": "Turner",
    "MobilePhone": "+1 (876) 543-2109",
    "WorkPhone": "+1 (234) 567-8901",
    "OfficePhone": "+1 (987) 654-3210",
    "HomePhone": "+1 (123) 456-7890",
    "Company": "XYZ Corp",
    "Email": "scarlett.turner@xyzcorp.com"
  },
  {
    "FirstName": "Mason",
    "LastName": "Carter",
    "MobilePhone": "+1 (234) 567-8901",
    "WorkPhone": "+1 (876) 543-2109",
    "OfficePhone": "+1 (765) 432-1098",
    "HomePhone": "+1 (654) 321-0987",
    "Company": "ABC Inc.",
    "Email": "mason.carter@abcinc.com"
  },
  {
    "FirstName": "Aria",
    "LastName": "Nelson",
    "MobilePhone": "+1 (543) 210-9876",
    "WorkPhone": "+1 (321) 098-7654",
    "OfficePhone": "+1 (210) 987-6543",
    "HomePhone": "+1 (432) 109-8765",
    "Company": "123 Industries",
    "Email": "aria.nelson@123industries.com"
  },
  {
    "FirstName": "Liam",
    "LastName": "Ward",
    "MobilePhone": "+1 (321) 098-7654",
    "WorkPhone": "+1 (543) 210-9876",
    "OfficePhone": "+1 (654) 321-0987",
    "HomePhone": "+1 (876) 543-2109",
    "Company": "XYZ Corp",
    "Email": "liam.ward@xyzcorp.com"
  },
  {
    "FirstName": "Sophia",
    "LastName": "Turner",
    "MobilePhone": "+1 (654) 321-0987",
    "WorkPhone": "+1 (765) 432-1098",
    "OfficePhone": "+1 (876) 543-2109",
    "HomePhone": "+1 (987) 654-3210",
    "Company": "ABC Inc.",
    "Email": "sophia.turner@abcinc.com"
  },
  {
    "FirstName": "Jackson",
    "LastName": "Harris",
    "MobilePhone": "+1 (765) 432-1098",
    "WorkPhone": "+1 (654) 321-0987",
    "OfficePhone": "+1 (432) 109-8765",
    "HomePhone": "+1 (321) 098-7654",
    "Company": "123 Industries",
    "Email": "jackson.harris@123industries.com"
  },
  {
    "FirstName": "Amelia",
    "LastName": "Davis",
    "MobilePhone": "+1 (876) 543-2109",
    "WorkPhone": "+1 (234) 567-8901",
    "OfficePhone": "+1 (987) 654-3210",
    "HomePhone": "+1 (123) 456-7890",
    "Company": "XYZ Corp",
    "Email": "amelia.davis@xyzcorp.com"
  },
  {
    "FirstName": "Liam",
    "LastName": "Brown",
    "MobilePhone": "+1 (234) 567-8901",
    "WorkPhone": "+1 (876) 543-2109",
    "OfficePhone": "+1 (765) 432-1098",
    "HomePhone": "+1 (654) 321-0987",
    "Company": "ABC Inc.",
    "Email": "liam.brown@abcinc.com"
  },
  {
    "FirstName": "Olivia",
    "LastName": "Perez",
    "MobilePhone": "+1 (543) 210-9876",
    "WorkPhone": "+1 (321) 098-7654",
    "OfficePhone": "+1 (210) 987-6543",
    "HomePhone": "+1 (432) 109-8765",
    "Company": "123 Industries",
    "Email": "olivia.perez@123industries.com"
  },
  {
    "FirstName": "Noah",
    "LastName": "Miller",
    "MobilePhone": "+1 (321) 098-7654",
    "WorkPhone": "+1 (543) 210-9876",
    "OfficePhone": "+1 (654) 321-0987",
    "HomePhone": "+1 (876) 543-2109",
    "Company": "XYZ Corp",
    "Email": "noah.miller@xyzcorp.com"
  },
  {
    "FirstName": "Ava",
    "LastName": "Gonzalez",
    "MobilePhone": "+1 (654) 321-0987",
    "WorkPhone": "+1 (765) 432-1098",
    "OfficePhone": "+1 (876) 543-2109",
    "HomePhone": "+1 (987) 654-3210",
    "Company": "ABC Inc.",
    "Email": "ava.gonzalez@abcinc.com"
  },
  {
    "FirstName": "James",
    "LastName": "Lewis",
    "MobilePhone": "+1 (765) 432-1098",
    "WorkPhone": "+1 (654) 321-0987",
    "OfficePhone": "+1 (432) 109-8765",
    "HomePhone": "+1 (321) 098-7654",
    "Company": "123 Industries",
    "Email": "james.lewis@123industries.com"
  },
  {
    "FirstName": "Sophia",
    "LastName": "Clark",
    "MobilePhone": "+1 (876) 543-2109",
    "WorkPhone": "+1 (234) 567-8901",
    "OfficePhone": "+1 (987) 654-3210",
    "HomePhone": "+1 (123) 456-7890",
    "Company": "XYZ Corp",
    "Email": "sophia.clark@xyzcorp.com"
  },
  {
    "FirstName": "Benjamin",
    "LastName": "Rodriguez",
    "MobilePhone": "+1 (234) 567-8901",
    "WorkPhone": "+1 (876) 543-2109",
    "OfficePhone": "+1 (765) 432-1098",
    "HomePhone": "+1 (654) 321-0987",
    "Company": "ABC Inc.",
    "Email": "benjamin.rodriguez@abcinc.com"
  },
  {
    "FirstName": "Emma",
    "LastName": "Adams",
    "MobilePhone": "+1 (543) 210-9876",
    "WorkPhone": "+1 (321) 098-7654",
    "OfficePhone": "+1 (210) 987-6543",
    "HomePhone": "+1 (432) 109-8765",
    "Company": "123 Industries",
    "Email": "emma.adams@123industries.com"
  },
  {
    "FirstName": "Ethan",
    "LastName": "Parker",
    "MobilePhone": "+1 (321) 098-7654",
    "WorkPhone": "+1 (543) 210-9876",
    "OfficePhone": "+1 (654) 321-0987",
    "HomePhone": "+1 (876) 543-2109",
    "Company": "XYZ Corp",
    "Email": "ethan.parker@xyzcorp.com"
  },
  {
    "FirstName": "Lily",
    "LastName": "Wright",
    "MobilePhone": "+1 (654) 321-0987",
    "WorkPhone": "+1 (765) 432-1098",
    "OfficePhone": "+1 (876) 543-2109",
    "HomePhone": "+1 (987) 654-3210",
    "Company": "ABC Inc.",
    "Email": "lily.wright@abcinc.com"
  },
  {
    "FirstName": "Daniel",
    "LastName": "Roberts",
    "MobilePhone": "+1 (765) 432-1098",
    "WorkPhone": "+1 (654) 321-0987",
    "OfficePhone": "+1 (432) 109-8765",
    "HomePhone": "+1 (321) 098-7654",
    "Company": "123 Industries",
    "Email": "daniel.roberts@123industries.com"
  },
  {
    "FirstName": "Madison",
    "LastName": "Turner",
    "MobilePhone": "+1 (876) 543-2109",
    "WorkPhone": "+1 (234) 567-8901",
    "OfficePhone": "+1 (987) 654-3210",
    "HomePhone": "+1 (123) 456-7890",
    "Company": "XYZ Corp",
    "Email": "madison.turner@xyzcorp.com"
  },
  {
    "FirstName": "Mason",
    "LastName": "Wood",
    "MobilePhone": "+1 (234) 567-8901",
    "WorkPhone": "+1 (876) 543-2109",
    "OfficePhone": "+1 (765) 432-1098",
    "HomePhone": "+1 (654) 321-0987",
    "Company": "ABC Inc.",
    "Email": "mason.wood@abcinc.com"
  },
  {
    "FirstName": "Harper",
    "LastName": "Ross",
    "MobilePhone": "+1 (543) 210-9876",
    "WorkPhone": "+1 (321) 098-7654",
    "OfficePhone": "+1 (210) 987-6543",
    "HomePhone": "+1 (432) 109-8765",
    "Company": "123 Industries",
    "Email": "harper.ross@123industries.com"
  }
]

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [data, setData] = useState([
    {
      "FirstName": "John",
      "LastName": "Doe",
      "MobilePhone": "+1 (123) 456-7890",
      "WorkPhone": "+1 (234) 567-8901",
      "OfficePhone": "+1 (345) 678-9012",
      "HomePhone": "+1 (456) 789-0123",
      "Company": "ABC Inc.",
      "Email": "john.doe@abcinc.com"
    },
    {
      "FirstName": "Jane",
      "LastName": "Smith",
      "MobilePhone": "+1 (987) 654-3210",
      "WorkPhone": "+1 (876) 543-2109",
      "OfficePhone": "+1 (765) 432-1098",
      "HomePhone": "+1 (654) 321-0987",
      "Company": "XYZ Corp",
      "Email": "jane.smith@xyzcorp.com"
    },
    {
      "FirstName": "Michael",
      "LastName": "Johnson",
      "MobilePhone": "+1 (543) 210-9876",
      "WorkPhone": "+1 (432) 109-8765",
      "OfficePhone": "+1 (321) 098-7654",
      "HomePhone": "+1 (210) 987-6543",
      "Company": "123 Industries",
      "Email": "michael.johnson@123industries.com"
    },
    {
      "FirstName": "Emily",
      "LastName": "Brown",
      "MobilePhone": "+1 (234) 567-8901",
      "WorkPhone": "+1 (123) 456-7890",
      "OfficePhone": "+1 (987) 654-3210",
      "HomePhone": "+1 (876) 543-2109",
      "Company": "XYZ Corp",
      "Email": "emily.brown@xyzcorp.com"
    },
    {
      "FirstName": "David",
      "LastName": "Wilson",
      "MobilePhone": "+1 (876) 543-2109",
      "WorkPhone": "+1 (987) 654-3210",
      "OfficePhone": "+1 (123) 456-7890",
      "HomePhone": "+1 (234) 567-8901",
      "Company": "ABC Inc.",
      "Email": "david.wilson@abcinc.com"
    },
    {
      "FirstName": "Sarah",
      "LastName": "Anderson",
      "MobilePhone": "+1 (432) 109-8765",
      "WorkPhone": "+1 (210) 987-6543",
      "OfficePhone": "+1 (543) 210-9876",
      "HomePhone": "+1 (321) 098-7654",
      "Company": "123 Industries",
      "Email": "sarah.anderson@123industries.com"
    },
    {
      "FirstName": "William",
      "LastName": "Lee",
      "MobilePhone": "+1 (321) 098-7654",
      "WorkPhone": "+1 (543) 210-9876",
      "OfficePhone": "+1 (210) 987-6543",
      "HomePhone": "+1 (432) 109-8765",
      "Company": "XYZ Corp",
      "Email": "william.lee@xyzcorp.com"
    },
    {
      "FirstName": "Olivia",
      "LastName": "Garcia",
      "MobilePhone": "+1 (654) 321-0987",
      "WorkPhone": "+1 (765) 432-1098",
      "OfficePhone": "+1 (876) 543-2109",
      "HomePhone": "+1 (987) 654-3210",
      "Company": "ABC Inc.",
      "Email": "olivia.garcia@abcinc.com"
    },
    {
      "FirstName": "James",
      "LastName": "Martinez",
      "MobilePhone": "+1 (765) 432-1098",
      "WorkPhone": "+1 (654) 321-0987",
      "OfficePhone": "+1 (432) 109-8765",
      "HomePhone": "+1 (321) 098-7654",
      "Company": "123 Industries",
      "Email": "james.martinez@123industries.com"
    },
    {
      "FirstName": "Sophia",
      "LastName": "Lopez",
      "MobilePhone": "+1 (876) 543-2109",
      "WorkPhone": "+1 (234) 567-8901",
      "OfficePhone": "+1 (987) 654-3210",
      "HomePhone": "+1 (123) 456-7890",
      "Company": "XYZ Corp",
      "Email": "sophia.lopez@xyzcorp.com"
    },
    {
      "FirstName": "Benjamin",
      "LastName": "Hernandez",
      "MobilePhone": "+1 (234) 567-8901",
      "WorkPhone": "+1 (876) 543-2109",
      "OfficePhone": "+1 (765) 432-1098",
      "HomePhone": "+1 (654) 321-0987",
      "Company": "ABC Inc.",
      "Email": "benjamin.hernandez@abcinc.com"
    },
    {
      "FirstName": "Mia",
      "LastName": "Williams",
      "MobilePhone": "+1 (543) 210-9876",
      "WorkPhone": "+1 (321) 098-7654",
      "OfficePhone": "+1 (210) 987-6543",
      "HomePhone": "+1 (432) 109-8765",
      "Company": "123 Industries",
      "Email": "mia.williams@123industries.com"
    },
    {
      "FirstName": "Elijah",
      "LastName": "Taylor",
      "MobilePhone": "+1 (321) 098-7654",
      "WorkPhone": "+1 (543) 210-9876",
      "OfficePhone": "+1 (654) 321-0987",
      "HomePhone": "+1 (876) 543-2109",
      "Company": "XYZ Corp",
      "Email": "elijah.taylor@xyzcorp.com"
    },
    {
      "FirstName": "Ava",
      "LastName": "Clark",
      "MobilePhone": "+1 (654) 321-0987",
      "WorkPhone": "+1 (765) 432-1098",
      "OfficePhone": "+1 (876) 543-2109",
      "HomePhone": "+1 (987) 654-3210",
      "Company": "ABC Inc.",
      "Email": "ava.clark@abcinc.com"
    },
    {
      "FirstName": "Liam",
      "LastName": "Lewis",
      "MobilePhone": "+1 (765) 432-1098",
      "WorkPhone": "+1 (654) 321-0987",
      "OfficePhone": "+1 (432) 109-8765",
      "HomePhone": "+1 (321) 098-7654",
      "Company": "123 Industries",
      "Email": "liam.lewis@123industries.com"
    },
    {
      "FirstName": "Charlotte",
      "LastName": "Hall",
      "MobilePhone": "+1 (876) 543-2109",
      "WorkPhone": "+1 (234) 567-8901",
      "OfficePhone": "+1 (987) 654-3210",
      "HomePhone": "+1 (123) 456-7890",
      "Company": "XYZ Corp",
      "Email": "charlotte.hall@xyzcorp.com"
    },
    {
      "FirstName": "Noah",
      "LastName": "Young",
      "MobilePhone": "+1 (234) 567-8901",
      "WorkPhone": "+1 (876) 543-2109",
      "OfficePhone": "+1 (765) 432-1098",
      "HomePhone": "+1 (654) 321-0987",
      "Company": "ABC Inc.",
      "Email": "noah.young@abcinc.com"
    },
    {
      "FirstName": "Lily",
      "LastName": "Walker",
      "MobilePhone": "+1 (543) 210-9876",
      "WorkPhone": "+1 (321) 098-7654",
      "OfficePhone": "+1 (210) 987-6543",
      "HomePhone": "+1 (432) 109-8765",
      "Company": "123 Industries",
      "Email": "lily.walker@123industries.com"
    },
    {
      "FirstName": "Lucas",
      "LastName": "Adams",
      "MobilePhone": "+1 (321) 098-7654",
      "WorkPhone": "+1 (543) 210-9876",
      "OfficePhone": "+1 (654) 321-0987",
      "HomePhone": "+1 (876) 543-2109",
      "Company": "XYZ Corp",
      "Email": "lucas.adams@xyzcorp.com"
    },
    {
      "FirstName": "Grace",
      "LastName": "Parker",
      "MobilePhone": "+1 (654) 321-0987",
      "WorkPhone": "+1 (765) 432-1098",
      "OfficePhone": "+1 (876) 543-2109",
      "HomePhone": "+1 (987) 654-3210",
      "Company": "ABC Inc.",
      "Email": "grace.parker@abcinc.com"
    },
    {
      "FirstName": "Henry",
      "LastName": "Morris",
      "MobilePhone": "+1 (765) 432-1098",
      "WorkPhone": "+1 (654) 321-0987",
      "OfficePhone": "+1 (432) 109-8765",
      "HomePhone": "+1 (321) 098-7654",
      "Company": "123 Industries",
      "Email": "henry.morris@123industries.com"
    },
    {
      "FirstName": "Chloe",
      "LastName": "Cook",
      "MobilePhone": "+1 (876) 543-2109",
      "WorkPhone": "+1 (234) 567-8901",
      "OfficePhone": "+1 (987) 654-3210",
      "HomePhone": "+1 (123) 456-7890",
      "Company": "XYZ Corp",
      "Email": "chloe.cook@xyzcorp.com"
    },
    {
      "FirstName": "Jackson",
      "LastName": "Baker",
      "MobilePhone": "+1 (234) 567-8901",
      "WorkPhone": "+1 (876) 543-2109",
      "OfficePhone": "+1 (765) 432-1098",
      "HomePhone": "+1 (654) 321-0987",
      "Company": "ABC Inc.",
      "Email": "jackson.baker@abcinc.com"
    },
    {
      "FirstName": "Zoey",
      "LastName": "Bennett",
      "MobilePhone": "+1 (543) 210-9876",
      "WorkPhone": "+1 (321) 098-7654",
      "OfficePhone": "+1 (210) 987-6543",
      "HomePhone": "+1 (432) 109-8765",
      "Company": "123 Industries",
      "Email": "zoey.bennett@123industries.com"
    },
    {
      "FirstName": "Sebastian",
      "LastName": "Hall",
      "MobilePhone": "+1 (321) 098-7654",
      "WorkPhone": "+1 (543) 210-9876",
      "OfficePhone": "+1 (654) 321-0987",
      "HomePhone": "+1 (876) 543-2109",
      "Company": "XYZ Corp",
      "Email": "sebastian.hall@xyzcorp.com"
    },
    {
      "FirstName": "Avery",
      "LastName": "Bell",
      "MobilePhone": "+1 (654) 321-0987",
      "WorkPhone": "+1 (765) 432-1098",
      "OfficePhone": "+1 (876) 543-2109",
      "HomePhone": "+1 (987) 654-3210",
      "Company": "ABC Inc.",
      "Email": "avery.bell@abcinc.com"
    },
    {
      "FirstName": "Ethan",
      "LastName": "Ward",
      "MobilePhone": "+1 (765) 432-1098",
      "WorkPhone": "+1 (654) 321-0987",
      "OfficePhone": "+1 (432) 109-8765",
      "HomePhone": "+1 (321) 098-7654",
      "Company": "123 Industries",
      "Email": "ethan.ward@123industries.com"
    },
    {
      "FirstName": "Scarlett",
      "LastName": "Turner",
      "MobilePhone": "+1 (876) 543-2109",
      "WorkPhone": "+1 (234) 567-8901",
      "OfficePhone": "+1 (987) 654-3210",
      "HomePhone": "+1 (123) 456-7890",
      "Company": "XYZ Corp",
      "Email": "scarlett.turner@xyzcorp.com"
    },
    {
      "FirstName": "Mason",
      "LastName": "Carter",
      "MobilePhone": "+1 (234) 567-8901",
      "WorkPhone": "+1 (876) 543-2109",
      "OfficePhone": "+1 (765) 432-1098",
      "HomePhone": "+1 (654) 321-0987",
      "Company": "ABC Inc.",
      "Email": "mason.carter@abcinc.com"
    },
    {
      "FirstName": "Aria",
      "LastName": "Nelson",
      "MobilePhone": "+1 (543) 210-9876",
      "WorkPhone": "+1 (321) 098-7654",
      "OfficePhone": "+1 (210) 987-6543",
      "HomePhone": "+1 (432) 109-8765",
      "Company": "123 Industries",
      "Email": "aria.nelson@123industries.com"
    },
    {
      "FirstName": "Liam",
      "LastName": "Ward",
      "MobilePhone": "+1 (321) 098-7654",
      "WorkPhone": "+1 (543) 210-9876",
      "OfficePhone": "+1 (654) 321-0987",
      "HomePhone": "+1 (876) 543-2109",
      "Company": "XYZ Corp",
      "Email": "liam.ward@xyzcorp.com"
    },
    {
      "FirstName": "Sophia",
      "LastName": "Turner",
      "MobilePhone": "+1 (654) 321-0987",
      "WorkPhone": "+1 (765) 432-1098",
      "OfficePhone": "+1 (876) 543-2109",
      "HomePhone": "+1 (987) 654-3210",
      "Company": "ABC Inc.",
      "Email": "sophia.turner@abcinc.com"
    },
    {
      "FirstName": "Jackson",
      "LastName": "Harris",
      "MobilePhone": "+1 (765) 432-1098",
      "WorkPhone": "+1 (654) 321-0987",
      "OfficePhone": "+1 (432) 109-8765",
      "HomePhone": "+1 (321) 098-7654",
      "Company": "123 Industries",
      "Email": "jackson.harris@123industries.com"
    },
    {
      "FirstName": "Amelia",
      "LastName": "Davis",
      "MobilePhone": "+1 (876) 543-2109",
      "WorkPhone": "+1 (234) 567-8901",
      "OfficePhone": "+1 (987) 654-3210",
      "HomePhone": "+1 (123) 456-7890",
      "Company": "XYZ Corp",
      "Email": "amelia.davis@xyzcorp.com"
    },
    {
      "FirstName": "Liam",
      "LastName": "Brown",
      "MobilePhone": "+1 (234) 567-8901",
      "WorkPhone": "+1 (876) 543-2109",
      "OfficePhone": "+1 (765) 432-1098",
      "HomePhone": "+1 (654) 321-0987",
      "Company": "ABC Inc.",
      "Email": "liam.brown@abcinc.com"
    },
    {
      "FirstName": "Olivia",
      "LastName": "Perez",
      "MobilePhone": "+1 (543) 210-9876",
      "WorkPhone": "+1 (321) 098-7654",
      "OfficePhone": "+1 (210) 987-6543",
      "HomePhone": "+1 (432) 109-8765",
      "Company": "123 Industries",
      "Email": "olivia.perez@123industries.com"
    },
    {
      "FirstName": "Noah",
      "LastName": "Miller",
      "MobilePhone": "+1 (321) 098-7654",
      "WorkPhone": "+1 (543) 210-9876",
      "OfficePhone": "+1 (654) 321-0987",
      "HomePhone": "+1 (876) 543-2109",
      "Company": "XYZ Corp",
      "Email": "noah.miller@xyzcorp.com"
    },
    {
      "FirstName": "Ava",
      "LastName": "Gonzalez",
      "MobilePhone": "+1 (654) 321-0987",
      "WorkPhone": "+1 (765) 432-1098",
      "OfficePhone": "+1 (876) 543-2109",
      "HomePhone": "+1 (987) 654-3210",
      "Company": "ABC Inc.",
      "Email": "ava.gonzalez@abcinc.com"
    },
    {
      "FirstName": "James",
      "LastName": "Lewis",
      "MobilePhone": "+1 (765) 432-1098",
      "WorkPhone": "+1 (654) 321-0987",
      "OfficePhone": "+1 (432) 109-8765",
      "HomePhone": "+1 (321) 098-7654",
      "Company": "123 Industries",
      "Email": "james.lewis@123industries.com"
    },
    {
      "FirstName": "Sophia",
      "LastName": "Clark",
      "MobilePhone": "+1 (876) 543-2109",
      "WorkPhone": "+1 (234) 567-8901",
      "OfficePhone": "+1 (987) 654-3210",
      "HomePhone": "+1 (123) 456-7890",
      "Company": "XYZ Corp",
      "Email": "sophia.clark@xyzcorp.com"
    },
    {
      "FirstName": "Benjamin",
      "LastName": "Rodriguez",
      "MobilePhone": "+1 (234) 567-8901",
      "WorkPhone": "+1 (876) 543-2109",
      "OfficePhone": "+1 (765) 432-1098",
      "HomePhone": "+1 (654) 321-0987",
      "Company": "ABC Inc.",
      "Email": "benjamin.rodriguez@abcinc.com"
    },
    {
      "FirstName": "Emma",
      "LastName": "Adams",
      "MobilePhone": "+1 (543) 210-9876",
      "WorkPhone": "+1 (321) 098-7654",
      "OfficePhone": "+1 (210) 987-6543",
      "HomePhone": "+1 (432) 109-8765",
      "Company": "123 Industries",
      "Email": "emma.adams@123industries.com"
    },
    {
      "FirstName": "Ethan",
      "LastName": "Parker",
      "MobilePhone": "+1 (321) 098-7654",
      "WorkPhone": "+1 (543) 210-9876",
      "OfficePhone": "+1 (654) 321-0987",
      "HomePhone": "+1 (876) 543-2109",
      "Company": "XYZ Corp",
      "Email": "ethan.parker@xyzcorp.com"
    },
    {
      "FirstName": "Lily",
      "LastName": "Wright",
      "MobilePhone": "+1 (654) 321-0987",
      "WorkPhone": "+1 (765) 432-1098",
      "OfficePhone": "+1 (876) 543-2109",
      "HomePhone": "+1 (987) 654-3210",
      "Company": "ABC Inc.",
      "Email": "lily.wright@abcinc.com"
    },
    {
      "FirstName": "Daniel",
      "LastName": "Roberts",
      "MobilePhone": "+1 (765) 432-1098",
      "WorkPhone": "+1 (654) 321-0987",
      "OfficePhone": "+1 (432) 109-8765",
      "HomePhone": "+1 (321) 098-7654",
      "Company": "123 Industries",
      "Email": "daniel.roberts@123industries.com"
    },
    {
      "FirstName": "Madison",
      "LastName": "Turner",
      "MobilePhone": "+1 (876) 543-2109",
      "WorkPhone": "+1 (234) 567-8901",
      "OfficePhone": "+1 (987) 654-3210",
      "HomePhone": "+1 (123) 456-7890",
      "Company": "XYZ Corp",
      "Email": "madison.turner@xyzcorp.com"
    },
    {
      "FirstName": "Mason",
      "LastName": "Wood",
      "MobilePhone": "+1 (234) 567-8901",
      "WorkPhone": "+1 (876) 543-2109",
      "OfficePhone": "+1 (765) 432-1098",
      "HomePhone": "+1 (654) 321-0987",
      "Company": "ABC Inc.",
      "Email": "mason.wood@abcinc.com"
    },
    {
      "FirstName": "Harper",
      "LastName": "Ross",
      "MobilePhone": "+1 (543) 210-9876",
      "WorkPhone": "+1 (321) 098-7654",
      "OfficePhone": "+1 (210) 987-6543",
      "HomePhone": "+1 (432) 109-8765",
      "Company": "123 Industries",
      "Email": "harper.ross@123industries.com"
    }
  ]);

  useEffect(() => {
    setData([
      {
        "FirstName": "John",
        "LastName": "Doe",
        "MobilePhone": "+1 (123) 456-7890",
        "WorkPhone": "+1 (234) 567-8901",
        "OfficePhone": "+1 (345) 678-9012",
        "HomePhone": "+1 (456) 789-0123",
        "Company": "ABC Inc.",
        "Email": "john.doe@abcinc.com"
      },
      {
        "FirstName": "Jane",
        "LastName": "Smith",
        "MobilePhone": "+1 (987) 654-3210",
        "WorkPhone": "+1 (876) 543-2109",
        "OfficePhone": "+1 (765) 432-1098",
        "HomePhone": "+1 (654) 321-0987",
        "Company": "XYZ Corp",
        "Email": "jane.smith@xyzcorp.com"
      },
      {
        "FirstName": "Michael",
        "LastName": "Johnson",
        "MobilePhone": "+1 (543) 210-9876",
        "WorkPhone": "+1 (432) 109-8765",
        "OfficePhone": "+1 (321) 098-7654",
        "HomePhone": "+1 (210) 987-6543",
        "Company": "123 Industries",
        "Email": "michael.johnson@123industries.com"
      },
      {
        "FirstName": "Emily",
        "LastName": "Brown",
        "MobilePhone": "+1 (234) 567-8901",
        "WorkPhone": "+1 (123) 456-7890",
        "OfficePhone": "+1 (987) 654-3210",
        "HomePhone": "+1 (876) 543-2109",
        "Company": "XYZ Corp",
        "Email": "emily.brown@xyzcorp.com"
      },
      {
        "FirstName": "David",
        "LastName": "Wilson",
        "MobilePhone": "+1 (876) 543-2109",
        "WorkPhone": "+1 (987) 654-3210",
        "OfficePhone": "+1 (123) 456-7890",
        "HomePhone": "+1 (234) 567-8901",
        "Company": "ABC Inc.",
        "Email": "david.wilson@abcinc.com"
      },
      {
        "FirstName": "Sarah",
        "LastName": "Anderson",
        "MobilePhone": "+1 (432) 109-8765",
        "WorkPhone": "+1 (210) 987-6543",
        "OfficePhone": "+1 (543) 210-9876",
        "HomePhone": "+1 (321) 098-7654",
        "Company": "123 Industries",
        "Email": "sarah.anderson@123industries.com"
      },
      {
        "FirstName": "William",
        "LastName": "Lee",
        "MobilePhone": "+1 (321) 098-7654",
        "WorkPhone": "+1 (543) 210-9876",
        "OfficePhone": "+1 (210) 987-6543",
        "HomePhone": "+1 (432) 109-8765",
        "Company": "XYZ Corp",
        "Email": "william.lee@xyzcorp.com"
      },
      {
        "FirstName": "Olivia",
        "LastName": "Garcia",
        "MobilePhone": "+1 (654) 321-0987",
        "WorkPhone": "+1 (765) 432-1098",
        "OfficePhone": "+1 (876) 543-2109",
        "HomePhone": "+1 (987) 654-3210",
        "Company": "ABC Inc.",
        "Email": "olivia.garcia@abcinc.com"
      },
      {
        "FirstName": "James",
        "LastName": "Martinez",
        "MobilePhone": "+1 (765) 432-1098",
        "WorkPhone": "+1 (654) 321-0987",
        "OfficePhone": "+1 (432) 109-8765",
        "HomePhone": "+1 (321) 098-7654",
        "Company": "123 Industries",
        "Email": "james.martinez@123industries.com"
      },
      {
        "FirstName": "Sophia",
        "LastName": "Lopez",
        "MobilePhone": "+1 (876) 543-2109",
        "WorkPhone": "+1 (234) 567-8901",
        "OfficePhone": "+1 (987) 654-3210",
        "HomePhone": "+1 (123) 456-7890",
        "Company": "XYZ Corp",
        "Email": "sophia.lopez@xyzcorp.com"
      },
      {
        "FirstName": "Benjamin",
        "LastName": "Hernandez",
        "MobilePhone": "+1 (234) 567-8901",
        "WorkPhone": "+1 (876) 543-2109",
        "OfficePhone": "+1 (765) 432-1098",
        "HomePhone": "+1 (654) 321-0987",
        "Company": "ABC Inc.",
        "Email": "benjamin.hernandez@abcinc.com"
      },
      {
        "FirstName": "Mia",
        "LastName": "Williams",
        "MobilePhone": "+1 (543) 210-9876",
        "WorkPhone": "+1 (321) 098-7654",
        "OfficePhone": "+1 (210) 987-6543",
        "HomePhone": "+1 (432) 109-8765",
        "Company": "123 Industries",
        "Email": "mia.williams@123industries.com"
      },
      {
        "FirstName": "Elijah",
        "LastName": "Taylor",
        "MobilePhone": "+1 (321) 098-7654",
        "WorkPhone": "+1 (543) 210-9876",
        "OfficePhone": "+1 (654) 321-0987",
        "HomePhone": "+1 (876) 543-2109",
        "Company": "XYZ Corp",
        "Email": "elijah.taylor@xyzcorp.com"
      },
      {
        "FirstName": "Ava",
        "LastName": "Clark",
        "MobilePhone": "+1 (654) 321-0987",
        "WorkPhone": "+1 (765) 432-1098",
        "OfficePhone": "+1 (876) 543-2109",
        "HomePhone": "+1 (987) 654-3210",
        "Company": "ABC Inc.",
        "Email": "ava.clark@abcinc.com"
      },
      {
        "FirstName": "Liam",
        "LastName": "Lewis",
        "MobilePhone": "+1 (765) 432-1098",
        "WorkPhone": "+1 (654) 321-0987",
        "OfficePhone": "+1 (432) 109-8765",
        "HomePhone": "+1 (321) 098-7654",
        "Company": "123 Industries",
        "Email": "liam.lewis@123industries.com"
      },
      {
        "FirstName": "Charlotte",
        "LastName": "Hall",
        "MobilePhone": "+1 (876) 543-2109",
        "WorkPhone": "+1 (234) 567-8901",
        "OfficePhone": "+1 (987) 654-3210",
        "HomePhone": "+1 (123) 456-7890",
        "Company": "XYZ Corp",
        "Email": "charlotte.hall@xyzcorp.com"
      },
      {
        "FirstName": "Noah",
        "LastName": "Young",
        "MobilePhone": "+1 (234) 567-8901",
        "WorkPhone": "+1 (876) 543-2109",
        "OfficePhone": "+1 (765) 432-1098",
        "HomePhone": "+1 (654) 321-0987",
        "Company": "ABC Inc.",
        "Email": "noah.young@abcinc.com"
      },
      {
        "FirstName": "Lily",
        "LastName": "Walker",
        "MobilePhone": "+1 (543) 210-9876",
        "WorkPhone": "+1 (321) 098-7654",
        "OfficePhone": "+1 (210) 987-6543",
        "HomePhone": "+1 (432) 109-8765",
        "Company": "123 Industries",
        "Email": "lily.walker@123industries.com"
      },
      {
        "FirstName": "Lucas",
        "LastName": "Adams",
        "MobilePhone": "+1 (321) 098-7654",
        "WorkPhone": "+1 (543) 210-9876",
        "OfficePhone": "+1 (654) 321-0987",
        "HomePhone": "+1 (876) 543-2109",
        "Company": "XYZ Corp",
        "Email": "lucas.adams@xyzcorp.com"
      },
      {
        "FirstName": "Grace",
        "LastName": "Parker",
        "MobilePhone": "+1 (654) 321-0987",
        "WorkPhone": "+1 (765) 432-1098",
        "OfficePhone": "+1 (876) 543-2109",
        "HomePhone": "+1 (987) 654-3210",
        "Company": "ABC Inc.",
        "Email": "grace.parker@abcinc.com"
      },
      {
        "FirstName": "Henry",
        "LastName": "Morris",
        "MobilePhone": "+1 (765) 432-1098",
        "WorkPhone": "+1 (654) 321-0987",
        "OfficePhone": "+1 (432) 109-8765",
        "HomePhone": "+1 (321) 098-7654",
        "Company": "123 Industries",
        "Email": "henry.morris@123industries.com"
      },
      {
        "FirstName": "Chloe",
        "LastName": "Cook",
        "MobilePhone": "+1 (876) 543-2109",
        "WorkPhone": "+1 (234) 567-8901",
        "OfficePhone": "+1 (987) 654-3210",
        "HomePhone": "+1 (123) 456-7890",
        "Company": "XYZ Corp",
        "Email": "chloe.cook@xyzcorp.com"
      },
      {
        "FirstName": "Jackson",
        "LastName": "Baker",
        "MobilePhone": "+1 (234) 567-8901",
        "WorkPhone": "+1 (876) 543-2109",
        "OfficePhone": "+1 (765) 432-1098",
        "HomePhone": "+1 (654) 321-0987",
        "Company": "ABC Inc.",
        "Email": "jackson.baker@abcinc.com"
      },
      {
        "FirstName": "Zoey",
        "LastName": "Bennett",
        "MobilePhone": "+1 (543) 210-9876",
        "WorkPhone": "+1 (321) 098-7654",
        "OfficePhone": "+1 (210) 987-6543",
        "HomePhone": "+1 (432) 109-8765",
        "Company": "123 Industries",
        "Email": "zoey.bennett@123industries.com"
      },
      {
        "FirstName": "Sebastian",
        "LastName": "Hall",
        "MobilePhone": "+1 (321) 098-7654",
        "WorkPhone": "+1 (543) 210-9876",
        "OfficePhone": "+1 (654) 321-0987",
        "HomePhone": "+1 (876) 543-2109",
        "Company": "XYZ Corp",
        "Email": "sebastian.hall@xyzcorp.com"
      },
      {
        "FirstName": "Avery",
        "LastName": "Bell",
        "MobilePhone": "+1 (654) 321-0987",
        "WorkPhone": "+1 (765) 432-1098",
        "OfficePhone": "+1 (876) 543-2109",
        "HomePhone": "+1 (987) 654-3210",
        "Company": "ABC Inc.",
        "Email": "avery.bell@abcinc.com"
      },
      {
        "FirstName": "Ethan",
        "LastName": "Ward",
        "MobilePhone": "+1 (765) 432-1098",
        "WorkPhone": "+1 (654) 321-0987",
        "OfficePhone": "+1 (432) 109-8765",
        "HomePhone": "+1 (321) 098-7654",
        "Company": "123 Industries",
        "Email": "ethan.ward@123industries.com"
      },
      {
        "FirstName": "Scarlett",
        "LastName": "Turner",
        "MobilePhone": "+1 (876) 543-2109",
        "WorkPhone": "+1 (234) 567-8901",
        "OfficePhone": "+1 (987) 654-3210",
        "HomePhone": "+1 (123) 456-7890",
        "Company": "XYZ Corp",
        "Email": "scarlett.turner@xyzcorp.com"
      },
      {
        "FirstName": "Mason",
        "LastName": "Carter",
        "MobilePhone": "+1 (234) 567-8901",
        "WorkPhone": "+1 (876) 543-2109",
        "OfficePhone": "+1 (765) 432-1098",
        "HomePhone": "+1 (654) 321-0987",
        "Company": "ABC Inc.",
        "Email": "mason.carter@abcinc.com"
      },
      {
        "FirstName": "Aria",
        "LastName": "Nelson",
        "MobilePhone": "+1 (543) 210-9876",
        "WorkPhone": "+1 (321) 098-7654",
        "OfficePhone": "+1 (210) 987-6543",
        "HomePhone": "+1 (432) 109-8765",
        "Company": "123 Industries",
        "Email": "aria.nelson@123industries.com"
      },
      {
        "FirstName": "Liam",
        "LastName": "Ward",
        "MobilePhone": "+1 (321) 098-7654",
        "WorkPhone": "+1 (543) 210-9876",
        "OfficePhone": "+1 (654) 321-0987",
        "HomePhone": "+1 (876) 543-2109",
        "Company": "XYZ Corp",
        "Email": "liam.ward@xyzcorp.com"
      },
      {
        "FirstName": "Sophia",
        "LastName": "Turner",
        "MobilePhone": "+1 (654) 321-0987",
        "WorkPhone": "+1 (765) 432-1098",
        "OfficePhone": "+1 (876) 543-2109",
        "HomePhone": "+1 (987) 654-3210",
        "Company": "ABC Inc.",
        "Email": "sophia.turner@abcinc.com"
      },
      {
        "FirstName": "Jackson",
        "LastName": "Harris",
        "MobilePhone": "+1 (765) 432-1098",
        "WorkPhone": "+1 (654) 321-0987",
        "OfficePhone": "+1 (432) 109-8765",
        "HomePhone": "+1 (321) 098-7654",
        "Company": "123 Industries",
        "Email": "jackson.harris@123industries.com"
      },
      {
        "FirstName": "Amelia",
        "LastName": "Davis",
        "MobilePhone": "+1 (876) 543-2109",
        "WorkPhone": "+1 (234) 567-8901",
        "OfficePhone": "+1 (987) 654-3210",
        "HomePhone": "+1 (123) 456-7890",
        "Company": "XYZ Corp",
        "Email": "amelia.davis@xyzcorp.com"
      },
      {
        "FirstName": "Liam",
        "LastName": "Brown",
        "MobilePhone": "+1 (234) 567-8901",
        "WorkPhone": "+1 (876) 543-2109",
        "OfficePhone": "+1 (765) 432-1098",
        "HomePhone": "+1 (654) 321-0987",
        "Company": "ABC Inc.",
        "Email": "liam.brown@abcinc.com"
      },
      {
        "FirstName": "Olivia",
        "LastName": "Perez",
        "MobilePhone": "+1 (543) 210-9876",
        "WorkPhone": "+1 (321) 098-7654",
        "OfficePhone": "+1 (210) 987-6543",
        "HomePhone": "+1 (432) 109-8765",
        "Company": "123 Industries",
        "Email": "olivia.perez@123industries.com"
      },
      {
        "FirstName": "Noah",
        "LastName": "Miller",
        "MobilePhone": "+1 (321) 098-7654",
        "WorkPhone": "+1 (543) 210-9876",
        "OfficePhone": "+1 (654) 321-0987",
        "HomePhone": "+1 (876) 543-2109",
        "Company": "XYZ Corp",
        "Email": "noah.miller@xyzcorp.com"
      },
      {
        "FirstName": "Ava",
        "LastName": "Gonzalez",
        "MobilePhone": "+1 (654) 321-0987",
        "WorkPhone": "+1 (765) 432-1098",
        "OfficePhone": "+1 (876) 543-2109",
        "HomePhone": "+1 (987) 654-3210",
        "Company": "ABC Inc.",
        "Email": "ava.gonzalez@abcinc.com"
      },
      {
        "FirstName": "James",
        "LastName": "Lewis",
        "MobilePhone": "+1 (765) 432-1098",
        "WorkPhone": "+1 (654) 321-0987",
        "OfficePhone": "+1 (432) 109-8765",
        "HomePhone": "+1 (321) 098-7654",
        "Company": "123 Industries",
        "Email": "james.lewis@123industries.com"
      },
      {
        "FirstName": "Sophia",
        "LastName": "Clark",
        "MobilePhone": "+1 (876) 543-2109",
        "WorkPhone": "+1 (234) 567-8901",
        "OfficePhone": "+1 (987) 654-3210",
        "HomePhone": "+1 (123) 456-7890",
        "Company": "XYZ Corp",
        "Email": "sophia.clark@xyzcorp.com"
      },
      {
        "FirstName": "Benjamin",
        "LastName": "Rodriguez",
        "MobilePhone": "+1 (234) 567-8901",
        "WorkPhone": "+1 (876) 543-2109",
        "OfficePhone": "+1 (765) 432-1098",
        "HomePhone": "+1 (654) 321-0987",
        "Company": "ABC Inc.",
        "Email": "benjamin.rodriguez@abcinc.com"
      },
      {
        "FirstName": "Emma",
        "LastName": "Adams",
        "MobilePhone": "+1 (543) 210-9876",
        "WorkPhone": "+1 (321) 098-7654",
        "OfficePhone": "+1 (210) 987-6543",
        "HomePhone": "+1 (432) 109-8765",
        "Company": "123 Industries",
        "Email": "emma.adams@123industries.com"
      },
      {
        "FirstName": "Ethan",
        "LastName": "Parker",
        "MobilePhone": "+1 (321) 098-7654",
        "WorkPhone": "+1 (543) 210-9876",
        "OfficePhone": "+1 (654) 321-0987",
        "HomePhone": "+1 (876) 543-2109",
        "Company": "XYZ Corp",
        "Email": "ethan.parker@xyzcorp.com"
      },
      {
        "FirstName": "Lily",
        "LastName": "Wright",
        "MobilePhone": "+1 (654) 321-0987",
        "WorkPhone": "+1 (765) 432-1098",
        "OfficePhone": "+1 (876) 543-2109",
        "HomePhone": "+1 (987) 654-3210",
        "Company": "ABC Inc.",
        "Email": "lily.wright@abcinc.com"
      },
      {
        "FirstName": "Daniel",
        "LastName": "Roberts",
        "MobilePhone": "+1 (765) 432-1098",
        "WorkPhone": "+1 (654) 321-0987",
        "OfficePhone": "+1 (432) 109-8765",
        "HomePhone": "+1 (321) 098-7654",
        "Company": "123 Industries",
        "Email": "daniel.roberts@123industries.com"
      },
      {
        "FirstName": "Madison",
        "LastName": "Turner",
        "MobilePhone": "+1 (876) 543-2109",
        "WorkPhone": "+1 (234) 567-8901",
        "OfficePhone": "+1 (987) 654-3210",
        "HomePhone": "+1 (123) 456-7890",
        "Company": "XYZ Corp",
        "Email": "madison.turner@xyzcorp.com"
      },
      {
        "FirstName": "Mason",
        "LastName": "Wood",
        "MobilePhone": "+1 (234) 567-8901",
        "WorkPhone": "+1 (876) 543-2109",
        "OfficePhone": "+1 (765) 432-1098",
        "HomePhone": "+1 (654) 321-0987",
        "Company": "ABC Inc.",
        "Email": "mason.wood@abcinc.com"
      },
      {
        "FirstName": "Harper",
        "LastName": "Ross",
        "MobilePhone": "+1 (543) 210-9876",
        "WorkPhone": "+1 (321) 098-7654",
        "OfficePhone": "+1 (210) 987-6543",
        "HomePhone": "+1 (432) 109-8765",
        "Company": "123 Industries",
        "Email": "harper.ross@123industries.com"
      }
    ])
  }, []);

  const handleSearch = (e) => {
    const filteredData = data.filter((person) => {
      const fullName = `${person.FirstName} ${person.LastName}`;
      return fullName.toLowerCase().includes(searchQuery.toLowerCase());
    });
    setData(filteredData);
  };

  // const filteredData = data.filter((person) => {
  //   const fullName = `${person.FirstName} ${person.LastName}`;
  //   return fullName.toLowerCase().includes(searchQuery.toLowerCase());
  // });

  return (
    <div>
      <div>
        <h1 className="title">Phone Book</h1>
        <div>
          <input
            className='search-bar'
            type="text"
            placeholder="Search by Name..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
        <div className='columns'>
          <span>Name</span>
          <span>Company</span>
          <span>Email</span>
          <span>Phone</span>
        </div>
      </div>
      <div className="person-list">
        {data.map((person, index) => (
          <Person key={index} person={person} />
        ))}
      </div>
    </div>
  );
}

function Person({ person }) {

  const [showAllPhones, setShowAllPhones] = useState(false);


  return (
    <div className="person-card">
      <div className="person-info">
        <div className='name-info'>
          {person.FirstName} {person.LastName}
        </div>
        <div className="company-info">
          {person.Company}
        </div>
        <div className="email-info">
          {person.Email}
        </div>
        <div className="phone-info"> {
          !showAllPhones ?
            <p>Mobile Phone: {person.MobilePhone}</p> :
            <>
              <p>Mobile Phone: {person.MobilePhone}</p>
              <p>Work Phone: {person.WorkPhone}</p>
              <p>Office Phone: {person.OfficePhone}</p>
              <p>Home Phone: {person.HomePhone}</p>
            </>

        }
          <button onClick={() => {
            setShowAllPhones(!showAllPhones);
          }}>{showAllPhones ? "Collapes" : "Expand"}</button>
        </div>
      </div>

    </div>
  )

}




export default App;
