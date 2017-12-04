import { createBrowserHistory } from 'history';
import queryString from 'query-string';

export function updateQueryParamsObject(paramObject, isReplace = false) {
  const history = createBrowserHistory();
  const parsed = queryString.parse(history.location.search);
  if (isReplace) {
    history.push({
      search: queryString.stringify(Object.assign({}, paramObject)),
    });
  } else {
    history.push({
      search: queryString.stringify(Object.assign({}, parsed, paramObject)),
    });
  }
}

export const downloadFile = (url) => {
  const link = document.createElement('a');
  link.href = url;
  link.click();
};

export const getUrlParams = urlSearchString => queryString.parse(urlSearchString);

export function getQeuryParams() {
  const history = createBrowserHistory();
  const parsed = queryString.parse(history.location.search);
  return parsed;
}

export function getAmountText(number) {
  let newNumber = parseFloat(number).toFixed(2);
  if (window.Intl) {
    newNumber = new Intl.NumberFormat(window.GlobalSession.numberLocale, {
      style: 'decimal',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(newNumber);
  }
  return newNumber;
}

export function showLabel(value) {
  const labelMap = {
    add: 'Created',
    delete: 'Deleted',
    edit: 'Updated',
    android: 'Mobile',
    ios: 'Mobile',
    tab: 'Tab',
    ray_web: 'Web',
    soap: 'Clinical Note',
    file: 'File',
    prescription: 'Prescription',
    appointment: 'Appointment',
    event: 'Event',
    invoice: 'Invoice',
    payment: 'Payment',
    practice_profile: 'Practice Profile',
    calendarsettings: 'Calendar Settings',
    tax: 'Tax',
    treatmentplan: 'Treatment Plan',
    print_settings: 'Print Settings',
    email_settings: 'Email Settings',
    sms_settings: 'Communications Settings',
    treatmentcategory: 'Procedure',
    patient_lab_order: 'Lab Order',
    BILL: 'bills',
    CHART: 'charts',
    CONSENT_FORM_RESPONSE: 'consent form responses',
    EMAIL: 'emails',
    IMMUNISATION: 'immunisations',
    LABEL: 'labels',
    MEDICAL_LEAVE: 'medical leaves',
    OTHER: '',
    PATIENT_GROWTH: 'patient growth',
    PATIENT_LABEL: 'patent labels',
    PATIENT_LAB_ORDER: 'patient lab orders',
    PATIENT_LAB_ORDERS_RESULT: 'patient lab order results',
    PAYMENT: 'payments',
    PRESCRIPTION: 'prescriptions',
    TIMELINE: 'timeline',
    TREATMENT_PLAN: 'trratment plans',
    VITAL_SIGN: 'vital signs',
    patient: 'Patient',
  };

  return labelMap[value] || value;
}

export function showHistoryLabel(value) {
  const labelMap = {
    add: 'Added',
    delete: 'Deleted',
    edit: 'Updated',
    cancelled: 'Cancelled',
  };

  return labelMap[value] || value;
}

export const getItemSnapshotKey = item => item.id + '_' + item.published_on.valueOf();

export const getHistoryLineItemKey = (action, key, value, type) => {
  let configKey = action + '_' + key;
  if (type !== undefined && type === 'boolean') {
    configKey = configKey + '_' + value.toString();
  }
  return configKey;
};
