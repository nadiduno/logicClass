import { PowerBIEmbed } from 'powerbi-client-react';
import { models } from 'powerbi-client';

import '@vime/core/themes/default.css';
export function Dashbord(){
  return (
   <div className="flex-1">
    <div className="bg-black flex justify-center">
        <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-square">
              {/* <PowerBIEmbed
                embedConfig = {{
                  type: 'types',   // Supported types: report, dashboard, tile, visual and qna
                  id: '2b2af477-9ef4-470c-b9ca-1cdc9da33878',
                  embedUrl: 'https://app.powerbi.com/reportEmbed?reportId=ae85e3c3-fe90-40b0-8ad6-36ad02da5976&groupId=8c95b6d3-4a45-44e1-be0b-496158e23210&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLUJSQVpJTC1TT1VUSC1CLVBSSU1BUlktcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQiLCJlbWJlZEZlYXR1cmVzIjp7Im1vZGVybkVtYmVkIjp0cnVlLCJ1c2FnZU1ldHJpY3NWTmV4dCI6dHJ1ZSwic2tpcFF1ZXJ5RGF0YVNhYVNFbWJlZCI6dHJ1ZSwic2tpcFF1ZXJ5RGF0YVBhYVNFbWJlZCI6dHJ1ZSwic2tpcFF1ZXJ5RGF0YUV4cG9ydFRvIjp0cnVlfX0%3d',
                  accessToken:'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IjJaUXBKM1VwYmpBWVhZR2FYRUpsOGxWMFRPSSIsImtpZCI6IjJaUXBKM1VwYmpBWVhZR2FYRUpsOGxWMFRPSSJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvMTRiZTVlMWQtMzYwZi00ODQ2LWI0YjAtMmU1OTM3NzU2ZDBkLyIsImlhdCI6MTY2Mzk3MTA2NSwibmJmIjoxNjYzOTcxMDY1LCJleHAiOjE2NjM5NzU4ODQsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVlFBcS84VEFBQUFBaStVU1VjZGJwemhBSElDRzNhQVF1SG0zOU1pQTlodis3Vno5SzU5SXJiNUppMnIwaFdZUkxYNTFmeFhuMGpsSHZmT2Qwc2VIT2tzaE1XelNuZExjTTMwZ3FCVThlMTVyZW9CcEJoOHdzWT0iLCJhbXIiOlsicHdkIiwibWZhIl0sImFwcGlkIjoiODcxYzAxMGYtNWU2MS00ZmIxLTgzYWMtOTg2MTBhN2U5MTEwIiwiYXBwaWRhY3IiOiIyIiwiZmFtaWx5X25hbWUiOiJEdW5vIiwiZ2l2ZW5fbmFtZSI6Ik5hZGkiLCJpcGFkZHIiOiIyMDAuMTcwLjc4LjI1MCIsIm5hbWUiOiJOYWRpIER1bm8iLCJvaWQiOiI4YzBjMDlkZC00ZWRmLTQ2M2EtYWY5ZC1mZWViMzc3NjBmMWIiLCJwdWlkIjoiMTAwMzIwMDIwN0QxNTY1NSIsInJoIjoiMC5BWDBBSFY2LUZBODJSa2kwc0M1Wk4zVnREUWtBQUFBQUFBQUF3QUFBQUFBQUFBQ2FBTjAuIiwic2NwIjoidXNlcl9pbXBlcnNvbmF0aW9uIiwic2lnbmluX3N0YXRlIjpbImttc2kiXSwic3ViIjoiOXlCY2VXUTVXR29jLXVmTGFHcDRNdFhzRkxpR2ZxSHpiV3lmSUM1RVBOMCIsInRpZCI6IjE0YmU1ZTFkLTM2MGYtNDg0Ni1iNGIwLTJlNTkzNzc1NmQwZCIsInVuaXF1ZV9uYW1lIjoiTmFkaUR1bm9AbmFkaWR1bm9jc3Yub25taWNyb3NvZnQuY29tIiwidXBuIjoiTmFkaUR1bm9AbmFkaWR1bm9jc3Yub25taWNyb3NvZnQuY29tIiwidXRpIjoiMEJJRUNEV0pDMEt1eUs0WnJIOFJBQSIsInZlciI6IjEuMCIsIndpZHMiOlsiNjJlOTAzOTQtNjlmNS00MjM3LTkxOTAtMDEyMTc3MTQ1ZTEwIiwiYjc5ZmJmNGQtM2VmOS00Njg5LTgxNDMtNzZiMTk0ZTg1NTA5Il19.cHtFk9dBBx0jFfV8v1krp5wvKO1FEquIQysnYYrP6zrUJ6gQFDD2MRJvO7lHeHXvJyB0nWvy4JtTU6z0X_ahgDhz4k6MEM-mDpyJlNLuum9Ts6OpO0DoxncuP4PpLIYZCMqw7tRaBdfk3djcqZkXGzaeSFUPGkBginhDfKOC4G-0-sIb-K1IwWQRvQOmsRRGdW40eli5n8kNgMm1SvjYCNWzpNqwDtE0lgvjjM4jbM5RMlcT7qndcYU71YoWpSZmoYDg7BP5QN7qFW7XM7vc-HDTrunbbEarhNTGHxPCXfvQ3FQLZobXAujRY__sAe8GMbR0dJIEg1cOjnb7muSZUA',
                  tokenType: models.TokenType.Aad,
                  settings: {
                    panes: {
                      filters: {
                        expanded: false,
                        visible: false
                      }
                    },
                    // background: models.BackgroundType.Transparent,
                  }
                }}

                eventHandlers = { 
                  new Map([
                    ['loaded', function () {console.log('Report loaded');}],
                    ['rendered', function () {console.log('Report rendered');}],
                    ['error', function (event) {console.log(event.detail);}]
                  ])
                }
                
                cssClassName = { "report-style-class" }

                getEmbeddedComponent = { (embeddedReport) => {
                  window.report = embeddedReport; 
                }}
              /> */}

        </div>
    </div>
  
    </div>
  )
}