# Screen — Booking Flow

**Route:** `/restaurants/:id/book` · **Shell:** FocusShell · **Primary action:** Confirm booking (step 3)

## Purpose
The user completes a reservation — the transaction screen. The most frequent task is selecting date/time, entering contact info, and confirming.

## Component tree
StepIndicator
  Step("When", state: completed/current/upcoming)
  Step("Your Info", state: completed/current/upcoming)
  Step("Confirm", state: completed/current/upcoming)
WhenStep(step 0)
  DayPicker(button × 7, selected state)
  DateSelector, GuestSelect(dropdown)
  TimeGrid(button × 8, selected state)
  Button(primary: "Continue", disabled until day+time selected)
YourInfoStep(step 1)
  SummaryLine("Date · Time · Guests")
  Input(name), Input(email), Input(phone)
  Textarea(special requests, optional)
  Button(secondary: "Back"), Button(primary: "Review booking", disabled until name+email+phone)
ConfirmStep(step 2)
  ConfirmationCard
    SuccessIcon(Check, green)
    Heading("Booking confirmed!"), Body("Confirmation sent to email")
  BookingSummaryCard
    DetailRow(Date), DetailRow(Time), DetailRow(Guests), DetailRow(Name)
    Caption("Cancellation policy")
  Button("Add to calendar")

## Wireframe
```
DESKTOP                                                    MOBILE
(same layout, wider content in FocusShell's 800px max)    ┌──────────────────────────┐
                                                           │ Reserve · Noma           │
┌──────────────────────────────────────────────────┐       │ Step 2 of 3             │
│ Step 1 of 3   ● ─ ─ ─ ─ ○ ─ ─ ─ ─ ○            │       │ ━━━━━●━━━━━━━━━         │
├──────────────────────────────────────────────────┤       ├──────────────────────────┤
│ WHEN                          GUESTS             │       │                          │
│ [Mo][Tu][We][Th]  [Jun 16 ▾]  [2 guests ▾]     │       │ WHEN                     │
│ [5:30][6:00][6:30][7:00]                         │       │ ┌───┬───┬───┬───┐      │
│ [7:30][8:00][8:30][9:00]                         │       │ │Mo │Tu │We │Th │      │
│                                                   │       │ └───┴───┴───┴───┘      │
│ YOUR INFO                                         │       │ ┌────┬────┬────┐       │
│ Name    [input__________________________]        │       │ │Jun │ 16 │ ▾  │       │
│ Email   [input__________________________]        │       │ └────┴────┴────┘       │
│ Phone   [input__________________________]        │       │                          │
│ Special requests (optional)                       │       │ 5:30 6:00 6:30          │
│ [input___________________________________]       │       │ 7:00 7:30 8:00          │
│                                                   │       │ 8:30 9:00              │
│ [*Confirm booking*]                               │       │                          │
│ No charge for cancellations up to 2hrs            │       │ GUESTS                  │
└──────────────────────────────────────────────────┘       │ [2 guests ▾]           │
                                                           │                          │
                                                           │ YOUR INFO                │
                                                           │ Name   [input____]      │
                                                           │ Email  [input____]      │
                                                           │ Phone  [input____]      │
                                                           │                          │
                                                           │ [*Confirm booking*]      │
                                                           │ No charge if cancelled   │
                                                           │ 2hrs+                    │
                                                           ├──────────────────────────┤
                                                           │ ⌂  ⌕  ☰  ♡  👤          │
                                                           └──────────────────────────┘
```

## Interactions
- Day/Time select → updates booking summary; continue enabled when both selected
- Name/Email/Phone → inline validation on blur; email format check, phone digit check
- "Review booking" → moves to step 2 even if validations fail (user sees inline errors)
- "Back" → preserves all input (ux-patterns.md: "persist input on back" for linear flows)
- "Confirm booking" → optimistic: shows success immediately, reconciles in background, error toast on failure
- "Add to calendar" → generates .ics download (mobile: native add-to-calendar)
- Exit X / Back in FocusShell → confirm modal "Leave? Your table won't be held" [Keep editing] [Leave]

## States
| State | Spec |
|---|---|
| Default | Step 1: today's day pre-selected, 8:00 PM pre-selected, 2 guests pre-selected. Step 2: empty fields. Step 3: shows confirmation with success. |
| Empty | N/A — step flow always has pre-filled defaults. |
| Loading | Skeleton: step indicator bars + day picker grid (7 skeleton squares) + time grid (8 skeleton squares) + form field bars. Step-by-step loading: render current step's skeleton immediately, next step on transition. |
| Error | **Form validation** — inline red text below field: "Please enter a valid email", "Phone must contain at least 10 digits". **Submission failure** — toast at top: "Booking couldn't be completed. [Retry]" — all form data preserved. |
| Mobile | Step indicator renders compactly. Time grid becomes 3 columns. Form is single-column. |

## Copy
| Element | Text |
|---|---|
| Step 1 heading | When |
| Step 2 heading | Your Info |
| Step 3 heading | Confirm |
| Continue button | Continue |
| Review button | Review booking |
| Confirm button | Confirm booking |
| Special requests label | Special requests (optional) |
| Success heading | Booking confirmed! |
| Success body | We've sent a confirmation to {email} |
| Cancellation policy | No charge for cancellations up to 2hrs before |
| Add to calendar | Add to calendar |
| Exit guard title | Leave? |
| Exit guard body | Your table won't be held |
| Exit guard keep | Keep editing |
| Exit guard leave | Leave |
| Submission error | Booking couldn't be completed. Retry |

## Proposed design-system amendment
None — uses existing system.
