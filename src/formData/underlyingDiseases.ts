import type { UnderlyingDiseases } from "../types/underlyingDisease";

export default [
  {
    text: "โรคเบาหวานที่ควบคุมไม่ได้ (Uncontrol DM)",
    value: "isDiseaseUncontrollDm"
  },
  {
    text: "โรคมะเร็งระหว่างการรักษา",
    value: "isDiseaseCancer",
  },
  {
    text: "โรคปอดอุดตันเรื้อรัง (COPD)",
    value: "isDiseaseCopd"
  },
  {
    text: "โรคหอบหืด (Asthma)",
    value: "isDiseaseAsthma"
  },
  {
    text: "โรคอ้วน (น้ำหนัก > 90 กิโลกรัม หรือ BMI > 30)",
    value: "isDiseaseObesity"
  },
  {
    text: "โรคไตวายเรื้อรังระยะที่ 4 (CKD stage 4)",
    value: "isDiseaseCkdLevelHigherThanFour",
  },
  {
    text: "โรคหลอดเลือดสมองภายใน 6 เดือนนี้",
    value: "isDiseaseStrokeWithinSixMonth"
  },
  {
    text: "โรคหัวใจหลอดเลือด",
    value: "isDiseaseCardioVascularDisease"
  },
  {
    text: "โรคเอชไอวี (HIV)",
    value: "isDiseaseHiv",
  },
  {
    text: "โรคความดันโลหิตสูง",
    value: "isDiseaseHypertension"
  },
  {
    text: "โรคไขมันในเลือดสูง",
    value: "isDiseaseHyperlipidemia"
  },
  {
    text: "โรคตับแข็ง",
    value: "isDiseaseCirrhosis"
  },
  {
    text: "วัณโรค",
    value: "isDiseaseTuberculosis"
  }
] as UnderlyingDiseases;
