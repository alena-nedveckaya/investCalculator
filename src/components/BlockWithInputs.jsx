import Input from './Input';
const names = [
  'initialInvestment',
  'annualInvestment',
  'expectedReturn',
  'duration',
];

export default function BlockWithInpust({ data, onChange }) {
  return (
    <div id="user-input">
      <div className="input-group">
        <Input
          label={'INITIAL INVESTMENT'}
          value={data[names[0]]}
          name={names[0]}
          onChange={onChange}
        />
        <Input
          label={'ANNUAL INVESTMENT'}
          value={data[names[1]]}
          name={names[1]}
          onChange={onChange}
        />
      </div>
      <div className="input-group">
        <Input
          label={'EXPECTED RETURNED'}
          value={data[names[2]]}
          name={names[2]}
          onChange={onChange}
        />
        <Input
          label={'DURATION'}
          value={data[names[3]]}
          name={names[3]}
          onChange={onChange}
        />
      </div>
    </div>
  );
}
