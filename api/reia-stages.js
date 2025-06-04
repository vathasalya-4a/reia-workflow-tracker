const express = require('express');
const router = express.Router();

const reiaStages = {
    "Launch & Attract": [
      {
        id: 1,
        title: "Create roles, post jobs, track applicants",
        formUrl: "https://apps.powerapps.com/play/e/default-797a3cb8-5bcf-4705-a748-b62328ac2c9c/a/3e66dcdd-da52-4364-b002-24492f95d732?tenantId=797a3cb8-5bcf-4705-a748-b62328ac2c9c&hint=9446b508-fc58-481c-97fd-72220d8a20a9&sourcetime=1746025264070&source=portal"
      }
    ],
    "Screen & Select": [
      {
        id: 2,
        title: "Review candidates, add notes, shortlist picks",
        formUrl: "https://apps.powerapps.com/play/FORM_URL_2"
      }
    ],
    "Decide & Offer": [
      {
        id: 3,
        title: "Capture decisions, generate offers, track outcomes",
        formUrl: "https://apps.powerapps.com/play/FORM_URL_3"
      }
    ],
    "Verify & Comply": [
      {
        id: 4,
        title: "Run checks, verify IDs, ensure compliance",
        formUrl: "https://apps.powerapps.com/play/FORM_URL_4"
      }
    ],
    "Ready & Welcome": [
      {
        id: 5,
        title: "Equip hires with access and info",
        formUrl: "https://apps.powerapps.com/play/FORM_URL_5"
      }
    ],
    "Wrap & Transition": [
      {
        id: 6,
        title: "Manage offboarding, exits, and transitions",
        formUrl: "https://apps.powerapps.com/play/FORM_URL_6"
      }
    ]
  };  

router.get('/', (req, res) => {
  res.json(reiaStages);
});

module.exports = router;