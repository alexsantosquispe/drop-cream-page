import { twMerge } from 'tailwind-merge';
import { translations } from '../../constants/translations';
import { FacebookIcon } from '../../icons/FacebookIcon';
import { GoogleIcon } from '../../icons/GoogleIcon';
import { InstagramIcon } from '../../icons/InstagramIcon';
import { XIcon } from '../../icons/XIcon';

const socialMediaStyle =
  'flex h-[2.4375rem] w-[2.4375rem] items-center justify-center rounded-full hover:cursor-pointer';

const Footer = () => {
  return (
    <div className="flex w-full flex-col-reverse items-center justify-center gap-8 md:justify-between lg:flex-row">
      <div className="flex flex-1 justify-center gap-x-4 text-sm font-light md:justify-start md:text-base">
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

      <div className="flex flex-1 justify-end gap-x-11">
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
