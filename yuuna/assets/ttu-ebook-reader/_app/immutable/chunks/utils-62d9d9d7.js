import{w as i}from"./dialog-manager-6307dd27.js";function s(e){var r;if("maxTouchPoints"in e.navigator)return e.navigator.maxTouchPoints>0;if("msMaxTouchPoints"in e.navigator)return e.navigator.msMaxTouchPoints>0;const t=(r=e.matchMedia)==null?void 0:r.call(e,"(pointer:coarse)");if((t==null?void 0:t.media)==="(pointer: coarse)")return!!t.matches;if("orientation"in e)return!0;const a=e.navigator.userAgent;return/\b(BlackBerry|webOS|iPhone|IEMobile|Android|Windows Phone|iPad|iPod)\b/i.test(a)}const c=i(!1);export{s as a,c as i};
