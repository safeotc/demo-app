import React from 'react';
import Image from 'next/image';
import logoImage from '../../../public/images/logo.png';

const Footer: React.FC = () => {
    return (
        <footer className="o-footer">
            <div className="o-footer__grid">
                <div className="o-footer__copyright">
                    <div className="c-footer-logo u-margin-bottom-small">
                        <div className="c-footer-logo__image">
                            <Image src={logoImage} alt="SafeOTC" layout="fill" />
                        </div>
                        <span className="c-footer-logo__title">SafeOTC</span>
                    </div>
                    <p className="u-margin-bottom-none">Copyright © SafeOTC 2021</p>
                </div>
                <div className="o-footer__links">
                    <div className="o-footer__column">
                        <h6 className="u-margin-bottom-small">Social</h6>
                        <ul className="o-list-bare u-margin-bottom-none">
                            <li className="u-margin-bottom-tiny">
                                <a className="c-link" rel="noreferrer" target="_blank" href="https://t.me/SafeOTC">
                                    Telegram
                                </a>
                            </li>
                            <li className="u-margin-bottom-tiny">
                                <a className="c-link" rel="noreferrer" target="_blank" href="https://t.me/SafeOTC_ANN">
                                    Telegram ANN
                                </a>
                            </li>
                            <li>
                                <a
                                    className="c-link"
                                    rel="noreferrer"
                                    target="_blank"
                                    href="https://twitter.com/safe_otc"
                                >
                                    Twitter
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="o-footer__column">
                        <h6 className="u-margin-bottom-small">Help</h6>
                        <ul className="o-list-bare u-margin-bottom-none">
                            <li>
                                <a className="c-link" href="mailto:support@safeotc.io">
                                    Support
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
