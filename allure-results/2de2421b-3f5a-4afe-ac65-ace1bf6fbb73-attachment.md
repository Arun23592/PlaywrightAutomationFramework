# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Playwright-fundamentals/DatePicker.spec.ts >> Delta.com Date Picker >> should dynamically select a future departure and return date
- Location: tests/Playwright-fundamentals/DatePicker.spec.ts:43:7

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByText('BLR Bengaluru, India')

```

# Page snapshot

```yaml
- generic [ref=f12e1]:
  - generic [ref=f12e2]:
    - generic [ref=f12e3]:
      - button "Skip to main content" [ref=f12e6] [cursor=pointer]: Skip to Main Content
      - navigation [ref=f12e7]:
        - generic [ref=f12e9]:
          - generic [ref=f12e13]:
            - link [ref=f12e14] [cursor=pointer]:
              - /url: /
              - img "Delta Air Lines" [ref=f12e15]
            - button "Skyteam" [ref=f12e16] [cursor=pointer]:
              - img "Skyteam" [ref=f12e17]
          - tablist [ref=f12e21]:
            - generic [ref=f12e22]:
              - tab "Book" [selected] [ref=f12e23] [cursor=pointer]
              - complementary [ref=f12e24]
              - tab "Check-in" [ref=f12e25] [cursor=pointer]
              - tab "My Trips" [ref=f12e26] [cursor=pointer]
              - tab "Flight Status" [ref=f12e27] [cursor=pointer]
            - generic [ref=f12e28]:
              - tab "Travel Info" [ref=f12e29] [cursor=pointer]
              - tab "SkyMiles" [ref=f12e30] [cursor=pointer]
              - tab "Need Help?" [ref=f12e31] [cursor=pointer]
          - generic [ref=f12e35]:
            - link "Sign Up" [ref=f12e37] [cursor=pointer]:
              - /url: /joinskymiles/
            - button "Log in, opens in new popup" [ref=f12e39] [cursor=pointer]: Log in
          - button "notification, 3 unread" [ref=f12e42] [cursor=pointer]:
            - generic [ref=f12e46]: "3"
          - button "Search" [ref=f12e51] [cursor=pointer]
        - region "Booking tabs and external links" [ref=f12e58]:
          - tablist [ref=f12e61]:
            - tab "Flights" [selected] [ref=f12e62] [cursor=pointer]
            - tab "Stays" [ref=f12e67] [cursor=pointer]
            - tab "Cars" [ref=f12e72] [cursor=pointer]
            - tab "Vacations" [ref=f12e77] [cursor=pointer]
            - tab "Cruises Opens in new tab" [ref=f12e82] [cursor=pointer]:
              - generic [ref=f12e85]: Cruises
          - generic "External links" [ref=f12e89]:
            - button "Delta AMEX CardsThis link opens another site in a new window that may not follow the same accessibility policies as Delta Air Lines." [ref=f12e90] [cursor=pointer]:
              - generic [ref=f12e98]: Delta AMEX Cards
            - button "Gift CardsThis link opens another site in a new window that may not follow the same accessibility policies as Delta Air Lines." [ref=f12e103] [cursor=pointer]:
              - generic [ref=f12e112]: Gift Cards
            - button "Updated Bags & Travel FeesThis link opens another site in a new window that may not follow the same accessibility policies as Delta Air Lines." [ref=f12e113] [cursor=pointer]:
              - generic [ref=f12e114]: Updated Bags & Travel Fees
        - generic [ref=f12e121]:
          - generic [ref=f12e122]:
            - generic [ref=f12e123]:
              - generic [ref=f12e129]:
                - button "Origin, BLR, Bangalore, India" [ref=f12e130] [cursor=pointer]:
                  - generic [ref=f12e131]: BLR
                  - generic [ref=f12e132]: Bangalore, India
                - button "One Way Route Picker Home Desktop Ow Destination" [ref=f12e133] [cursor=pointer]:
                  - generic [ref=f12e134]: To
                  - generic [ref=f12e135]: Destination
                - button "Swap origin and destination" [ref=f12e136] [cursor=pointer]
              - combobox "Trip Type, Round Trip" [ref=f12e140] [cursor=pointer]:
                - generic [ref=f12e141]:
                  - generic [ref=f12e142]: Trip Type
                  - generic [ref=f12e143]: Round Trip
              - button "Flight Date Field, DepartDate - ReturnDate" [ref=f12e148] [cursor=pointer]:
                - generic [ref=f12e149]: Depart - Return
              - combobox "Passenger Count, 1" [ref=f12e158] [cursor=pointer]:
                - generic [ref=f12e159]:
                  - generic [ref=f12e160]: Passenger Count
                  - generic [ref=f12e161]: "1"
            - button "Find Flights" [ref=f12e164] [cursor=pointer]
          - generic [ref=f12e165]:
            - generic [ref=f12e166]:
              - generic [ref=f12e167]:
                - checkbox "Shop with Miles" [ref=f12e168] [cursor=pointer]
                - generic [ref=f12e169] [cursor=pointer]: Shop with Miles
              - generic [ref=f12e170]:
                - checkbox "My Dates are Flexible" [ref=f12e171] [cursor=pointer]
                - generic [ref=f12e172] [cursor=pointer]: My Dates are Flexible
              - generic [ref=f12e173]:
                - checkbox "Include Basic" [checked] [ref=f12e174] [cursor=pointer]
                - generic [ref=f12e175] [cursor=pointer]: Include Basic
              - generic [ref=f12e176]:
                - button "Refundable Only Help Icon" [ref=f12e178] [cursor=pointer]
                - generic [ref=f12e179]:
                  - checkbox "Refundable Only" [ref=f12e180] [cursor=pointer]
                  - generic [ref=f12e181] [cursor=pointer]: Refundable Only
            - button "Advanced Search" [ref=f12e182] [cursor=pointer]
    - main [ref=f12e186]:
      - generic [ref=f12e187]:
        - generic [ref=f12e190]:
          - img "Image of seaside town" [ref=f12e192]
          - generic [ref=f12e193]:
            - link "Book Your Next Trip" [ref=f12e195] [cursor=pointer]:
              - /url: /apac/en/travel-planning-center/find-your-destination/route-map
            - link "Explore our current flight deals and plan your next adventure." [ref=f12e197] [cursor=pointer]:
              - /url: /apac/en/travel-planning-center/find-your-destination/route-map
            - button "Explore Offers" [ref=f12e199] [cursor=pointer]
        - generic [ref=f12e201]:
          - paragraph [ref=f12e203]: THE DELTA CUSTOMER EXPERIENCE
          - paragraph [ref=f12e205]: Supporting You Through Your Travel Journey
        - generic [ref=f12e208]:
          - img "How Can I Change/Cancel My Flight?" [ref=f12e210]
          - generic [ref=f12e211]:
            - generic [ref=f12e212]:
              - generic [ref=f12e213]: How Can I Change/Cancel My Flight?
              - generic [ref=f12e215]: We understand that your plans may change. It’s simple to cancel or change your flight prior to departure on delta.com in just a few easy steps.
            - link "Start a Change" [ref=f12e216] [cursor=pointer]:
              - /url: /apac/en/travel-planning-center/travel-planning-overview#changeorcancel
        - generic [ref=f12e218]:
          - generic [ref=f12e219]:
            - img "Discover Travel Products" [ref=f12e221]
            - generic [ref=f12e222]:
              - generic [ref=f12e223]:
                - generic [ref=f12e224]: Discover Travel Products
                - generic [ref=f12e226]: Explore products for all your travel needs. Choose from a la carte hotels, car rentals, cruises and vacation packages, and get exclusive SkyMiles® Member benefits.
              - link "Details" [ref=f12e227] [cursor=pointer]:
                - /url: https://www.delta.com/us/en/travel-planning-center/find-your-destination/travel-products?mkcpgn=hpBTF
          - generic [ref=f12e228]:
            - img "Ready For Adventure?" [ref=f12e230]
            - generic [ref=f12e231]:
              - generic [ref=f12e232]:
                - generic [ref=f12e233]: Ready For Adventure?
                - generic [ref=f12e235]: Explore flight deals to places you already love or discover new destinations that await you. Plan your next adventure today.
              - link "Search Deals" [ref=f12e236] [cursor=pointer]:
                - /url: /apac/en/flight-deals/current-flight-deals
          - generic [ref=f12e237]:
            - img "Elevate Your Flight Experience" [ref=f12e239]
            - generic [ref=f12e240]:
              - generic [ref=f12e241]:
                - generic [ref=f12e242]: Elevate Your Flight Experience
                - generic [ref=f12e244]: Stretch out and relax with more spacious seats in Delta Comfort or Delta First. Check out our Premium Cabin flight deals today.
              - link "Details" [ref=f12e245] [cursor=pointer]:
                - /url: https://www.delta.com/us/en/flight-deals/premium-cabin-flight-deals
        - generic [ref=f12e248]:
          - generic [ref=f12e249]:
            - generic [ref=f12e250]:
              - generic [ref=f12e251]: See Where You Can Fly With Delta
              - generic [ref=f12e253]: Explore our entire network and discover more destinations with our new interactive route map.
            - link "Explore Map" [ref=f12e254] [cursor=pointer]:
              - /url: /apac/en/travel-planning-center/find-your-destination/route-map
          - img "Image of the FlyDelta App" [ref=f12e256]
        - generic [ref=f12e259]:
          - img "Image of the FlyDelta App" [ref=f12e261]
          - generic [ref=f12e262]:
            - generic [ref=f12e263]:
              - generic [ref=f12e264]: Everything You Need, All in One Place
              - generic [ref=f12e266]: Download the Fly Delta app to check in, track your flight status, make changes to your trip, chat with a live agent and more.
            - link "Go to Download" [ref=f12e267] [cursor=pointer]:
              - /url: /apac/en/delta-digital/mobile
    - generic [ref=f12e271]:
      - generic [ref=f12e272]:
        - generic [ref=f12e273]:
          - generic [ref=f12e274]:
            - textbox "Try Asking Me A Question" [ref=f12e275]:
              - /placeholder: " "
            - generic: Try Asking Me A Question
          - button "Search" [ref=f12e276] [cursor=pointer]
        - generic [ref=f12e281]:
          - heading "Popular Topics:" [level=3] [ref=f12e282]
          - list [ref=f12e283]:
            - listitem [ref=f12e284]:
              - link "Help Center" [ref=f12e285] [cursor=pointer]:
                - /url: /apac/en/need-help/overview
            - listitem [ref=f12e286]:
              - link "Delta Discover Map" [ref=f12e287] [cursor=pointer]:
                - /url: /apac/en/travel-planning-center/find-your-destination/explore-top-destinations
            - listitem [ref=f12e288]:
              - link "eCredits" [ref=f12e289] [cursor=pointer]:
                - /url: /redeem-ecredit/
      - separator [ref=f12e290]
      - generic [ref=f12e294]:
        - generic [ref=f12e295]:
          - heading "About Delta" [level=3] [ref=f12e296]
          - list [ref=f12e297]:
            - listitem [ref=f12e298]:
              - link "About Us" [ref=f12e299] [cursor=pointer]:
                - /url: /apac/en/about-delta/overview
            - listitem [ref=f12e300]:
              - link "Careers" [ref=f12e301] [cursor=pointer]:
                - /url: /apac/en/careers/overview
            - listitem [ref=f12e302]:
              - link [ref=f12e303] [cursor=pointer]:
                - /url: https://news.delta.com
                - text: News Hub
                - img "open in new window" [ref=f12e304]
            - listitem [ref=f12e307]:
              - link [ref=f12e308] [cursor=pointer]:
                - /url: https://ir.delta.com/home/default.aspx
                - text: Investor Relations
                - img "open in new window" [ref=f12e309]
            - listitem [ref=f12e312]:
              - link [ref=f12e313] [cursor=pointer]:
                - /url: https://business.delta.com/
                - text: Business Travel
                - img "open in new window" [ref=f12e314]
            - listitem [ref=f12e317]:
              - link [ref=f12e318] [cursor=pointer]:
                - /url: https://pro.delta.com/content/common/en/agencymap.html
                - text: Travel Agents
                - img "open in new window" [ref=f12e319]
            - listitem [ref=f12e322]:
              - link "Mobile App" [ref=f12e323] [cursor=pointer]:
                - /url: /apac/en/delta-digital/mobile
            - listitem [ref=f12e324]:
              - link [ref=f12e325] [cursor=pointer]:
                - /url: https://shop.delta.com
                - text: Delta Shop
                - img "open in new window" [ref=f12e326]
        - generic [ref=f12e329]:
          - heading "Customer Service" [level=3] [ref=f12e330]
          - list [ref=f12e331]:
            - listitem [ref=f12e332]:
              - link "Help Center" [ref=f12e333] [cursor=pointer]:
                - /url: /apac/en/need-help/overview
            - listitem [ref=f12e334]:
              - link "Message Us" [ref=f12e335] [cursor=pointer]:
                - /url: /apac/en/need-help/overview#messageUs
            - listitem [ref=f12e336]:
              - link "Comment/Complaint" [ref=f12e337] [cursor=pointer]:
                - /url: /apac/en/need-help/overview?commentComplaintsForm
        - generic [ref=f12e338]:
          - heading "Site Support" [level=3] [ref=f12e339]
          - list [ref=f12e340]:
            - listitem [ref=f12e341]:
              - link "Login Help" [ref=f12e342] [cursor=pointer]:
                - /url: /apac/en/need-help/support-skymiles
            - listitem [ref=f12e343]:
              - link "Site Map" [ref=f12e344] [cursor=pointer]:
                - /url: /apac/en/sitemap
            - listitem [ref=f12e345]:
              - link "Browser Compatibility" [ref=f12e346] [cursor=pointer]:
                - /url: /apac/en/need-help/browser-compatibility
            - listitem [ref=f12e347]:
              - link "Accessibility" [ref=f12e348] [cursor=pointer]:
                - /url: /apac/en/legal/notices/accessibility
            - listitem [ref=f12e349]:
              - link "Booking Information" [ref=f12e350] [cursor=pointer]:
                - /url: /apac/en/booking-information/overview
        - generic [ref=f12e351]:
          - heading "Policies" [level=3] [ref=f12e352]
          - list [ref=f12e353]:
            - listitem [ref=f12e354]:
              - link "Customer Service Plan" [ref=f12e355] [cursor=pointer]:
                - /url: /apac/en/legal/customer-commitment
            - listitem [ref=f12e356]:
              - link "Tarmac Delay Plan" [ref=f12e357] [cursor=pointer]:
                - /url: /apac/en/legal/plan-for-tarmac-delays
            - listitem [ref=f12e358]:
              - link "Legal" [ref=f12e359] [cursor=pointer]:
                - /url: /apac/en/legal/notices/overview
            - listitem [ref=f12e360]:
              - link "Sustainability" [ref=f12e361] [cursor=pointer]:
                - /url: /apac/en/about-delta/sustainability
            - listitem [ref=f12e362]:
              - link "Contract of Carriage" [ref=f12e363] [cursor=pointer]:
                - /url: /apac/en/legal/contract-of-carriage-dgr
            - listitem [ref=f12e364]:
              - link "Cookies, Privacy & Security" [ref=f12e365] [cursor=pointer]:
                - /url: /apac/en/legal/privacy-and-security
            - listitem [ref=f12e366]:
              - link "Combatting Modern Slavery (PDF)" [ref=f12e367] [cursor=pointer]:
                - /url: /content/dam/delta-www/pdfs/combatting-modern-slavery-human-trafficking-sexual-exploitation.pdf
      - generic [ref=f12e369]:
        - paragraph [ref=f12e374]: This link opens another site in a new window that may not follow the same accessibility policies as Delta Air Lines.
        - generic [ref=f12e375]:
          - paragraph [ref=f12e376]:
            - text: © 2026 Delta Air Lines, Inc.
            - generic [ref=f12e377]: "|"
            - text: Travel may be on other airlines.
          - paragraph [ref=f12e378]:
            - text: Terms and conditions apply to all offers and SkyMiles benefits. See specific offer for details, and visit
            - link "SkyMiles Membership Guide & Program Rules" [ref=f12e379] [cursor=pointer]:
              - /url: /apac/en/skymiles/program-resources/program-rules
      - generic [ref=f12e380]:
        - generic [ref=f12e383]:
          - img "Facebook" [ref=f12e385] [cursor=pointer]
          - img "X" [ref=f12e387] [cursor=pointer]
        - generic [ref=f12e392]:
          - button "Link to change the language" [ref=f12e396] [cursor=pointer]: India - English
          - generic [ref=f12e397]: Link to change the language
  - dialog "Privacy" [ref=f12e399]:
    - generic [ref=f12e400]:
      - generic [ref=f12e401]: Delta and our third party partners access and store data on your device as necessary to provide this website and for analytics, enhanced functionality and advertising.
      - generic [ref=f12e405]:
        - button "Customize Preferences, Opens the preference center dialog" [ref=f12e406] [cursor=pointer]: Customize Preferences
        - generic [ref=f12e407]:
          - button "Necessary Only" [ref=f12e408] [cursor=pointer]
          - button "Accept All" [ref=f12e409] [cursor=pointer]
      - button "Close" [ref=f12e411] [cursor=pointer]
  - generic [ref=f12e414]:
    - img [ref=f12e416] [cursor=pointer]
    - generic [ref=f12e417]:
      - tablist [ref=f12e421]:
        - tab "Search" [selected] [ref=f12e422] [cursor=pointer]
      - generic [ref=f12e426]:
        - generic [ref=f12e428]:
          - textbox "Origin" [active] [ref=f12e429]:
            - /placeholder: " "
            - text: BLR
          - generic: Origin
          - generic [ref=f12e431] [cursor=pointer]
        - listbox "predictive_search_list" [ref=f12e434]:
          - option "BLR Bangalore, India" [ref=f12e435] [cursor=pointer]:
            - generic [ref=f12e436]:
              - generic [ref=f12e437]: BLR
              - text: Bangalore, India
```

# Test source

```ts
  1  | import { test, expect, Page } from "@playwright/test";
  2  | 
  3  | /**
  4  |  * Dynamically selects a date on the Delta.com date picker calendar.
  5  |  * Navigates forward month-by-month until the target month/year is visible,
  6  |  * then clicks the target day.
  7  |  */
  8  | async function selectDateFromPicker(page: Page, targetDate: Date) {
  9  |   const targetMonth = targetDate.toLocaleString("en-US", { month: "long" });
  10 |   const targetYear = targetDate.getFullYear().toString();
  11 |   const targetDay = targetDate.getDate().toString();
  12 | 
  13 |   const calendarHeader = page.locator(".monthYear");
  14 |   const nextMonthBtn = page.locator('button[aria-label="Next Month"]');
  15 | 
  16 |   // Navigate forward month-by-month until the target month/year is displayed
  17 |   for (let attempt = 0; attempt < 12; attempt++) {
  18 |     const headerText = await calendarHeader.first().textContent();
  19 |     if (headerText?.includes(targetMonth) && headerText?.includes(targetYear)) {
  20 |       break;
  21 |     }
  22 |     await nextMonthBtn.click();
  23 |     await page.waitForTimeout(300); // brief pause for calendar animation
  24 |   }
  25 | 
  26 |   // Click the specific day — Delta uses aria-label like "25 December 2026"
  27 |   const dayLabel = `${targetDay} ${targetMonth} ${targetYear}`;
  28 |   await page.getByLabel(dayLabel, { exact: true }).click();
  29 | }
  30 | 
  31 | test.describe("Delta.com Date Picker", () => {
  32 | 
  33 |   test.beforeEach(async ({ page }) => {
  34 |     await page.goto("https://www.delta.com/apac/en");
  35 | 
  36 |     // Dismiss cookie consent banner if present
  37 |     const acceptBtn = page.getByRole("button", { name: "Accept All" });
  38 |     if (await acceptBtn.isVisible({ timeout: 5000 }).catch(() => false)) {
  39 |       await acceptBtn.click();
  40 |     }
  41 |   });
  42 | 
  43 |   test("should dynamically select a future departure and return date", async ({ page }) => {
  44 | 
  45 |     // --- Step 1: Set Origin (From) ---
  46 |     // Origin is rendered as a <button> with label "Origin, BLR, Bangalore, India"
  47 |     await page.getByRole("button", { name: /Origin/ }).click();
  48 | 
  49 |     // After clicking, a predictive search input appears — clear and type
  50 |     const originSearchInput = page.locator('[id^="predictive_search"]');
  51 |     await originSearchInput.fill("BLR");
> 52 |     await page.getByText("BLR Bengaluru, India").click();
     |                                                  ^ Error: locator.click: Test timeout of 30000ms exceeded.
  53 | 
  54 |     // --- Step 2: Set Destination (To) ---
  55 |     // Destination button has a verbose accessible name
  56 |     await page.getByRole("button", { name: /Destination/ }).click();
  57 |     const destSearchInput = page.getByRole("textbox", { name: "Destination" });
  58 |     await destSearchInput.fill("MAA");
  59 |     await page.getByText("MAA Chennai, India", { exact: true }).click();
  60 | 
  61 |     // --- Step 3: Dynamically compute target dates ---
  62 |     const today = new Date();
  63 | 
  64 |     const departureDate = new Date(today);
  65 |     departureDate.setDate(today.getDate() + 7); // 1 week from today
  66 | 
  67 |     const returnDate = new Date(departureDate);
  68 |     returnDate.setDate(departureDate.getDate() + 5); // 5 days after departure
  69 | 
  70 |     // --- Step 4: Open date picker and select departure date ---
  71 |     await page.getByRole("button", { name: /Depart/ }).click();
  72 |     await selectDateFromPicker(page, departureDate);
  73 | 
  74 |     // --- Step 5: Select return date (calendar stays open after departure) ---
  75 |     await selectDateFromPicker(page, returnDate);
  76 | 
  77 |     // Click "Done" to confirm the date selection (if present)
  78 |     const doneBtn = page.getByRole("button", { name: "Done" });
  79 |     if (await doneBtn.isVisible({ timeout: 3000 }).catch(() => false)) {
  80 |       await doneBtn.click();
  81 |     }
  82 | 
  83 |     // --- Step 6: Assertions ---
  84 |     const departureDayFormatted = departureDate.toLocaleDateString("en-US", {
  85 |       month: "short",
  86 |       day: "numeric",
  87 |     });
  88 |     const returnDayFormatted = returnDate.toLocaleDateString("en-US", {
  89 |       month: "short",
  90 |       day: "numeric",
  91 |     });
  92 | 
  93 |     // Verify the selected dates are reflected on the booking widget
  94 |     await expect(page.getByText(departureDayFormatted).first()).toBeVisible();
  95 |     await expect(page.getByText(returnDayFormatted).first()).toBeVisible();
  96 |   });
  97 | });
```