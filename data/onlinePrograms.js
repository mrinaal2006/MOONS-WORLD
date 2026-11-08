// Online programmes: the 6 government & private universities Moon's World works with (Bankura).
// Courses & fees from fees_structure.xlsx. fee = programme fee in ₹ as given in the sheet.
// naac = accreditation grade, est = year established (from the sheet headers).
// type = "Government" | "Private". onRequest: true → card shows "Courses & fees on request".
// logo = official logo in /public/universities/ (badge with "short" letters is used if missing).
// To add ADAMAS courses: add items to its "courses" list and remove "onRequest".
export const onlineInstitutes = [
  {
    "name": "Andhra University",
    "short": "AU",
    "naac": "A++",
    "est": 1926,
    "courses": [
      {
        "name": "B.Com",
        "level": "UG",
        "cat": "B.Com",
        "duration": "3 years",
        "fee": 22000
      },
      {
        "name": "B.Com (With Apprenticeship)",
        "level": "UG",
        "cat": "B.Com",
        "duration": "3 years",
        "fee": 25000
      },
      {
        "name": "BA (History, Economics, Politics)",
        "level": "UG",
        "cat": "BA",
        "duration": "3 years",
        "fee": 22000
      },
      {
        "name": "BA (History, Economics, Politics) (With Apprenticeship)",
        "level": "UG",
        "cat": "BA",
        "duration": "3 years",
        "fee": 25000
      }
    ],
    "type": "Government",
    "logo": "/universities/andhra.png"
  },
  {
    "name": "Deen Dayal Upadhyaya Gorakhpur University",
    "short": "DDU",
    "naac": "A++",
    "est": 1957,
    "courses": [
      {
        "name": "B.Com (Hons)",
        "level": "UG",
        "cat": "B.Com",
        "duration": "4 years",
        "fee": 56500
      },
      {
        "name": "B.Com (Hons) (With Apprenticeship)",
        "level": "UG",
        "cat": "B.Com",
        "duration": "4 years",
        "fee": 76500
      },
      {
        "name": "BBA",
        "level": "UG",
        "cat": "BBA",
        "duration": "3 years",
        "fee": 57500
      },
      {
        "name": "BBA (With Apprenticeship)",
        "level": "UG",
        "cat": "BBA",
        "duration": "3 years",
        "fee": 72500
      },
      {
        "name": "MBA – Business Analyst / Marketing / Financial / Human Resource / Operations",
        "level": "PG",
        "cat": "MBA",
        "duration": "2 years",
        "fee": 52500
      }
    ],
    "type": "Government",
    "logo": "/universities/ddu.png"
  },
  {
    "name": "Uttaranchal University",
    "short": "UU",
    "naac": "A+",
    "est": 2013,
    "courses": [
      {
        "name": "BA",
        "level": "UG",
        "cat": "BA",
        "duration": "3 years",
        "fee": 72000
      },
      {
        "name": "BBA",
        "level": "UG",
        "cat": "BBA",
        "duration": "3 years",
        "fee": 120000
      },
      {
        "name": "BCA",
        "level": "UG",
        "cat": "BCA",
        "duration": "3 years",
        "fee": 120000
      },
      {
        "name": "MBA",
        "level": "PG",
        "cat": "MBA",
        "duration": "2 years",
        "fee": 98000
      }
    ],
    "type": "Private"
  },
  {
    "name": "Mizoram University",
    "short": "MZU",
    "naac": "A+",
    "est": 2001,
    "courses": [
      {
        "name": "BBA (E-Business)",
        "level": "UG",
        "cat": "BBA",
        "duration": "3 years",
        "fee": 55860
      },
      {
        "name": "MBA – Big Data Analytics",
        "level": "PG",
        "cat": "MBA",
        "duration": "2 years",
        "fee": 56690
      },
      {
        "name": "MBA – Entrepreneurship",
        "level": "PG",
        "cat": "MBA",
        "duration": "2 years",
        "fee": 54050
      },
      {
        "name": "MBA – Financial Management",
        "level": "PG",
        "cat": "MBA",
        "duration": "2 years",
        "fee": 54050
      },
      {
        "name": "MBA – Logistics & Supply Chain Management",
        "level": "PG",
        "cat": "MBA",
        "duration": "2 years",
        "fee": 56690
      },
      {
        "name": "MBA – Marketing",
        "level": "PG",
        "cat": "MBA",
        "duration": "2 years",
        "fee": 54050
      }
    ],
    "type": "Government",
    "logo": "/universities/mizoram.png"
  },
  {
    "name": "Chandigarh University",
    "short": "CU",
    "naac": "A+",
    "est": 2012,
    "courses": [
      {
        "name": "BA J&MC (With Apprenticeship)",
        "level": "UG",
        "cat": "BA",
        "duration": "3 years",
        "fee": 167668
      },
      {
        "name": "BBA (Business Analytics) (With Apprenticeship)",
        "level": "UG",
        "cat": "BBA",
        "duration": "3 years",
        "fee": 191002
      },
      {
        "name": "BBA (With Apprenticeship)",
        "level": "UG",
        "cat": "BBA",
        "duration": "3 years",
        "fee": 169000
      },
      {
        "name": "BCA (With Apprenticeship)",
        "level": "UG",
        "cat": "BCA",
        "duration": "3 years",
        "fee": 128000
      },
      {
        "name": "MBA (Business Analytics) (With Apprenticeship)",
        "level": "PG",
        "cat": "MBA",
        "duration": "2 years",
        "fee": 180000
      },
      {
        "name": "MBA (With Apprenticeship)",
        "level": "PG",
        "cat": "MBA",
        "duration": "2 years",
        "fee": 158001
      }
    ],
    "type": "Private",
    "logo": "/universities/chandigarh.png"
  },
  {
    "name": "ADAMAS University",
    "short": "ADM",
    "type": "Private",
    "naac": null,
    "est": null,
    "onRequest": true,
    "courses": []
  }
];
