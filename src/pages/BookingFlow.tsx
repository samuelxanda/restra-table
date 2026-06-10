import { useState } from 'react'
import { Check } from 'lucide-react'

const days = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su']
const times = ['5:30', '6:00', '6:30', '7:00', '7:30', '8:00', '8:30', '9:00']

const steps = ['When', 'Your Info', 'Confirm']

function StepIndicator({ current }: { current: number }) {
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between">
        {steps.map((label, i) => (
          <div key={label} className="flex items-center">
            <div className="flex flex-col items-center">
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-medium transition-colors ${
                  i < current
                    ? 'bg-accent text-accent-foreground'
                    : i === current
                      ? 'border-2 border-accent bg-accent-soft text-accent'
                      : 'border-2 border-border bg-background text-muted-foreground'
                }`}
              >
                {i < current ? <Check className="h-4 w-4" /> : i + 1}
              </div>
              <span
                className={`mt-1.5 text-xs font-medium ${
                  i <= current ? 'text-accent' : 'text-muted-foreground'
                }`}
              >
                {label}
              </span>
            </div>
            {i < steps.length - 1 && (
              <div
                className={`mx-2 h-px w-12 sm:w-20 ${
                  i < current ? 'bg-accent' : 'bg-border'
                }`}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export function BookingFlow() {
  const [step, setStep] = useState(0)
  const [selectedDay, setSelectedDay] = useState(1)
  const [selectedDate] = useState('Jun 16')
  const [selectedTime, setSelectedTime] = useState('8:00')
  const [guests, setGuests] = useState(2)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [specialRequests, setSpecialRequests] = useState('')

  const handleNext = () => setStep((s) => Math.min(s + 1, 2))
  const handleBack = () => setStep((s) => Math.max(s - 1, 0))

  const isStep1Valid = selectedDay >= 0 && selectedTime
  const isStep2Valid = name.trim() && email.trim() && phone.trim()

  return (
    <div>
      <StepIndicator current={step} />

      {step === 0 && (
        <section className="space-y-8">
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
              Day
            </h2>
            <div className="flex gap-2">
              {days.map((day, i) => (
                <button
                  key={day}
                  onClick={() => setSelectedDay(i)}
                  className={`flex-1 rounded-lg border py-2.5 text-sm font-medium transition-colors ${
                    i === selectedDay
                      ? 'border-accent bg-accent-soft text-accent'
                      : 'border-border bg-background text-foreground hover:bg-muted'
                  }`}
                >
                  {day}
                </button>
              ))}
            </div>
          </div>

          <div className="flex gap-3">
            <div className="flex-1">
              <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                Date
              </h2>
              <button className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-left text-sm text-foreground hover:bg-muted transition-colors">
                {selectedDate} <span className="float-right text-muted-foreground">&triangleright;</span>
              </button>
            </div>
            <div className="flex-1">
              <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                Guests
              </h2>
              <select
                value={guests}
                onChange={(e) => setGuests(Number(e.target.value))}
                className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                  <option key={n} value={n}>
                    {n} {n === 1 ? 'guest' : 'guests'}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
              Time
            </h2>
            <div className="grid grid-cols-3 gap-2 sm:grid-cols-4">
              {times.map((t) => (
                <button
                  key={t}
                  onClick={() => setSelectedTime(t)}
                  className={`rounded-lg border py-2.5 text-sm font-medium transition-colors ${
                    t === selectedTime
                      ? 'border-accent bg-accent-soft text-accent'
                      : 'border-border bg-background text-foreground hover:bg-muted'
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={handleNext}
            disabled={!isStep1Valid}
            className="w-full rounded-lg bg-accent px-4 py-3 text-sm font-medium text-accent-foreground hover:bg-accent-hover transition-colors disabled:pointer-events-none disabled:opacity-50"
          >
            Continue
          </button>
        </section>
      )}

      {step === 1 && (
        <section className="space-y-6">
          <p className="text-sm text-muted-foreground">
            {selectedDate} &middot; {selectedTime} PM &middot; {guests} {guests === 1 ? 'guest' : 'guests'}
          </p>

          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Name</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your full name"
                className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Phone</label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="(555) 123-4567"
                className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">
                Special requests <span className="text-muted-foreground">(optional)</span>
              </label>
              <textarea
                value={specialRequests}
                onChange={(e) => setSpecialRequests(e.target.value)}
                placeholder="Allergies, celebrations, seating preferences..."
                rows={3}
                className="w-full resize-none rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
          </div>

          <div className="flex gap-3">
            <button
              onClick={handleBack}
              className="flex-1 rounded-lg border border-border px-4 py-3 text-sm font-medium text-foreground hover:bg-muted transition-colors"
            >
              Back
            </button>
            <button
              onClick={handleNext}
              disabled={!isStep2Valid}
              className="flex-1 rounded-lg bg-accent px-4 py-3 text-sm font-medium text-accent-foreground hover:bg-accent-hover transition-colors disabled:pointer-events-none disabled:opacity-50"
            >
              Review booking
            </button>
          </div>
        </section>
      )}

      {step === 2 && (
        <section className="space-y-6">
          <div className="rounded-xl border border-border bg-card p-6 text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-success/10">
              <Check className="h-8 w-8 text-success" />
            </div>
            <h2 className="font-display text-xl font-semibold text-foreground">
              Booking confirmed!
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              We've sent a confirmation to {email}
            </p>
          </div>

          <div className="rounded-xl border border-border bg-card p-4 space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Date</span>
              <span className="font-medium text-foreground">{selectedDate}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Time</span>
              <span className="font-medium text-foreground">{selectedTime} PM</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Guests</span>
              <span className="font-medium text-foreground">{guests}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Name</span>
              <span className="font-medium text-foreground">{name}</span>
            </div>
            <div className="border-t border-border pt-3 text-center text-xs text-muted-foreground">
              No charge for cancellations up to 2hrs before
            </div>
          </div>

          <button className="w-full rounded-lg border border-border px-4 py-3 text-sm font-medium text-foreground hover:bg-muted transition-colors">
            Add to calendar
          </button>
        </section>
      )}
    </div>
  )
}
