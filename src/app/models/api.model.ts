export interface ApiResponse {
    searchRetrieveResponse: {
      version: number;
      numberOfRecords: number;
      records: Record[];
    };
  }
  
// api.models.ts 
interface Record {
    recordPacking: string;
    recordIdentifier: string;
    recordPosition: string;
    recordData: {
      dc_title: string;
      // ... otras propiedades de 'recordData'
    };
  }

  // api.model.ts

export interface RecordItem {
    recordPacking: string;
    recordIdentifier: string;
    recordPosition: string;
    recordData: {
      dc_title: string;
      // ... otras propiedades que tiene cada 'recordData'
    };
  }
  