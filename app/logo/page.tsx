import { Metadata } from 'next';
import { LegalLayout } from '@/components/legal-layout';
import { SvgLogo } from '@/components/svg-logo';

export const metadata: Metadata = {
  title: 'The SHSH Logo | Strong Hands, Soft Heart',
  description:
    'A deep dive into the meaning and technical aspects of the Strong Hands, Soft Heart logo.',
};

export default function LogoPage() {
  return (
    <LegalLayout title="The SHSH Logo" lastUpdated="April 28, 2025">
      <div className="flex flex-col items-center mb-12">
        <div className="w-64 h-64 mb-8">
          <SvgLogo className="w-full h-full" variant="site" />
        </div>
        <p className="text-center text-stone-600 mb-8">
          The Strong Hands, Soft Heart (SHSH) logo is a geometrically minimalistic yet symbolically
          dense construct.
        </p>
      </div>

      <h2>1. Geometric Foundation and Lineage</h2>
      <p>
        At its core, the SHSH logo is a geometrically minimalistic yet symbolically dense construct.
        The design uses a single, continuous line (unbroken, unhesitant), integrating two ancient
        alchemical symbols:
      </p>
      <ul>
        <li>Earth (△ downward with a line through it)</li>
        <li>Air/Spirit (△ upward with a line through it)</li>
      </ul>
      <p>
        Instead of rendering them separately, SHSH fuses the two into a single cohesive form,
        implying the unity of groundedness (Earth) and transcendence (Spirit) within a single life
        principle.
      </p>
      <p>
        The geometry follows sacred ratios — particularly approximating the Golden Ratio (ϕ) in
        segment relationships between the curve apex and base widths, creating a visually intuitive
        balance. Though not explicitly golden in measurement, the proportions tap into a cognitive
        memory of harmony stored within human perception, thanks to millennia of exposure to
        naturally occurring ϕ patterns (shells, plants, bones).
      </p>

      <h2>2. Symbolism: Embedded Layering</h2>
      <p>Every element in the logo operates on multiple simultaneous semiotic layers:</p>
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="border border-stone-200 p-2">Visual Element</th>
            <th className="border border-stone-200 p-2">Technical Description</th>
            <th className="border border-stone-200 p-2">Symbolic Interpretation</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-stone-200 p-2">Upward curve (top)</td>
            <td className="border border-stone-200 p-2">Convex parabolic arc</td>
            <td className="border border-stone-200 p-2">
              Aspiration, transcendence, ambition (Air/Spirit)
            </td>
          </tr>
          <tr>
            <td className="border border-stone-200 p-2">Downward curve (bottom)</td>
            <td className="border border-stone-200 p-2">Concave parabolic arc</td>
            <td className="border border-stone-200 p-2">Grounding, humility, embodiment (Earth)</td>
          </tr>
          <tr>
            <td className="border border-stone-200 p-2">Single stroke</td>
            <td className="border border-stone-200 p-2">
              Continuous vector path without disjunctions
            </td>
            <td className="border border-stone-200 p-2">
              Unity of body, mind, spirit; life without fragmentation
            </td>
          </tr>
          <tr>
            <td className="border border-stone-200 p-2">Mid-bar (horizontal line)</td>
            <td className="border border-stone-200 p-2">Orthogonal stroke bisecting</td>
            <td className="border border-stone-200 p-2">
              Horizon, balance, tension between planes (material and spiritual)
            </td>
          </tr>
          <tr>
            <td className="border border-stone-200 p-2">Negative space</td>
            <td className="border border-stone-200 p-2">Central internal void</td>
            <td className="border border-stone-200 p-2">
              Heart, emptiness that births compassion and presence
            </td>
          </tr>
        </tbody>
      </table>

      <h2>3. Visual Dynamics and Cognitive Processing</h2>
      <p>Neurologically, the logo engages the brain at three levels simultaneously:</p>
      <ul>
        <li>Form recognition (Gestalt Principles)</li>
        <li>Symbolic retrieval (from archetypal memory)</li>
        <li>Emotional affect</li>
      </ul>

      <h2>4. Systemic Scalability and Functional Design</h2>
      <p>Beyond beauty and meaning, the SHSH logo was engineered for operational excellence:</p>
      <ul>
        <li>
          Resolution independence: The vector form is infinitely scalable without loss of fidelity
        </li>
        <li>Color neutrality: Default black and white contrast ensures maximum adaptability</li>
        <li>Inversion resilience: Maintains meaning when reversed</li>
        <li>
          Micro to macro legibility: Recognizable at 16px favicon size as well as on a 10-foot
          banner
        </li>
        <li>Minimal anchor points: Optimized path points reduce file size and rendering time</li>
      </ul>

      <h2>5. Philosophical and Temporal Anchoring</h2>
      <p>The logo is not static. It breathes with time and context:</p>
      <ul>
        <li>In the early days, it represents personal mastery</li>
        <li>In maturity, it becomes leadership architecture</li>
        <li>In legacy, it transforms into a cultural artifact</li>
      </ul>

      <h2>6. Failure Modes and Defensive Design</h2>
      <p>
        In the spirit of good engineering, the SHSH logo is also built to resist misinterpretation:
      </p>
      <ul>
        <li>It avoids explicit religious or political symbols, staying universally humanistic</li>
        <li>It sidesteps cartoonishness and excessive abstraction</li>
        <li>It resists over-personalization while inviting projection by viewers</li>
      </ul>

      <div className="mt-12 text-center text-stone-600">
        <p>
          The Strong Hands, Soft Heart logo is a living geometry, a visual poem, and a technical
          machine:
        </p>
        <p>
          Alchemically inspired. Cognitively optimized. Architecturally durable. Spiritually
          resonant.
        </p>
        <p>It is not merely seen; It is felt, understood, inherited.</p>
      </div>
    </LegalLayout>
  );
}
