import { twMerge } from 'tailwind-merge';
import { translations } from '../../constants/translations';
import { FacebookIcon } from '../../icons/FacebookIcon';
import { GoogleIcon } from '../../icons/GoogleIcon';
import { InstagramIcon } from '../../icons/InstagramIcon';
import { XIcon } from '../../icons/XIcon';

const socialMediaStyle =
  'flex h-[2.4375rem] w-[2.4375rem] items-center justify-center rounded-full';
const Footer = () => {
  return (
    <div className="flex w-full items-center justify-between">
      <div className="flex w-full gap-x-4 font-light">
        <span>
          {`${translations.footer.designedBy} `}
          <a
            href={translations.footer.author.url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium underline"
          >
            {translations.footer.author.name}
          </a>
        </span>
        {`|`}
        <span>
          {`${translations.footer.developedBy} `}
          <a
            href={translations.footer.dev.url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium underline"
          >
            {translations.footer.dev.name}
          </a>
        </span>
      </div>

      <div className="flex gap-x-11">
        <a className={twMerge(socialMediaStyle, 'bg-white')}>
          <GoogleIcon className="size-[2.4375rem]" />
        </a>
        <a className={twMerge(socialMediaStyle, 'bg-white')}>
          <FacebookIcon className="size-[2.4375rem] text-[#347aea]" />
        </a>
        <a className={twMerge(socialMediaStyle, 'bg-black')}>
          <XIcon className="size-6" />
        </a>
        <a
          className={twMerge(
            socialMediaStyle,
            'bg-gradient-to-br from-[#fcb045] from-25% via-[#eb117a] to-[#5900c4]'
          )}
        >
          <InstagramIcon className="size-6" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
