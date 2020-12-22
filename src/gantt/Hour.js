import h from '../h';
import { formatDay } from '../utils';

export default function Hour({
  styles, dates, unit, offsetY, minTime, maxTime, maxTextWidth
}) {
  const days = dates.filter((v) => (new Date(v)).getHours() === 0);
  console.log(days)

  days.unshift(minTime);
  days.push(maxTime);

  const ticks = [];
  const x0 = maxTextWidth;
  const y2 = offsetY / 2;
  const len = days.length - 1;
  for (let i = 0; i < len; i++) {
    const cur = new Date(days[i]);
    const str = formatDay(cur);
    const x = x0 + (days[i] - minTime) / unit;
    const t = (days[i + 1] - days[i]) / unit;
    ticks.push((
      <g>
        <line x1={x} x2={x} y1={0} y2={y2} style={styles.line} />
        {t > 50 ? <text x={x + t / 2} y={offsetY * 0.25} style={styles.text3}>{str}</text> : null}
      </g>
    ));
  }
  return <g>{ticks}</g>;
}
