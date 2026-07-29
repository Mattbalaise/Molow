import Card from '@/components/card/card'
import './page.css'
import Navbar from '@/components/navbar/navbar'

const cards = [
  { angle: '-15deg', top: '150px' },
  { angle: '-10deg', top: '50px' },
  { angle: '0deg' },
  { angle: '10deg', top: '50px' },
  { angle: '15deg', top: '150px' },
]

export default function DashboardPage() {
  return <div className='page'>
    <section className="card-section">
      {cards.map((card) => (
        <Card key={card.angle} style={{ cardInner: { '--angle': card.angle, '--top': card.top } }} />
      ))}
    </section>
  </div>;
}
