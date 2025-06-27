import { translations } from '../../../../constants/translations';
import { CirclePlusIcon } from '../../../../icons/CirclePlusIcon';
import { IceCreamConeIcon } from '../../../../icons/IceCreamConeIcon';
import { IceCreamCupAltIcon } from '../../../../icons/IceCreamCupAltIcon';
import { IceCreamCupIcon } from '../../../../icons/IceCreamCupIcon';
import Button from '../../../atoms/Button';

const iconButtonStyles = 'h-[3.75rem] w-[3.75rem] rounded-2xl';

export const IceCreamTypesWrapper = () => {
  return (
    <div className="flex flex-col gap-[0.875rem]">
      <span className="text-[1.25rem] font-medium">
        {translations.content.types.title}
      </span>

      <div className="flex gap-x-[2.4375rem]">
        <Button
          icon={<IceCreamCupIcon />}
          className={iconButtonStyles}
          onClick={() => {
            console.log('ice cream type');
          }}
        />
        <Button
          icon={<IceCreamCupAltIcon />}
          className={iconButtonStyles}
          onClick={() => {
            console.log('ice cream type');
          }}
        />
        <Button
          icon={<IceCreamConeIcon />}
          className={iconButtonStyles}
          onClick={() => {
            console.log('ice cream type');
          }}
        />
        <Button
          icon={<CirclePlusIcon />}
          className={iconButtonStyles}
          onClick={() => {
            console.log('ice cream type');
          }}
        />
      </div>
    </div>
  );
};
