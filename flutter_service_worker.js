'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "01eb2c11c2685e04a0e3b0556549b914",
".git/config": "338e09bf589a7b9a54d30c3f1a64e344",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "21d2a4d5001c9b3f0738d42e78b4534e",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "273150c3469df21de5d57b837110be5d",
".git/logs/refs/heads/master": "273150c3469df21de5d57b837110be5d",
".git/logs/refs/remotes/origin/master": "a183a3b5c87481edcab04291e7f60805",
".git/objects/00/d2c272e6d94ac1de96622a8267bdd1022d5461": "3391f73e993df7d8ea3e1aab6001c5d4",
".git/objects/04/0b33d7208e5bffee961bac3e552a128fa7254d": "96b877ac9c0207022deda6e7268509a5",
".git/objects/06/4028a09d47776edd4dfbbbb13f9e74a8af1abd": "0b7e3e8400f47e31ec16daa6bf508bac",
".git/objects/06/d55d88ea29ac40c1f98188ab210672c1258529": "04ef745855725ebb05d0a69480063ef2",
".git/objects/0a/8574d5600128349b21ab5a8816e60e9369293f": "673ed0a875d0a513bc443deed9e0777b",
".git/objects/0e/f48bf5ab52f7e877cdce5f054589869c742205": "e3f37918cc0c8d7ec911fd9b37b17168",
".git/objects/10/c58befed0385f5eb8353cec27274ecb97e38d3": "895075fefd95a8c21bda97c0d6920a61",
".git/objects/11/1ee00656b606b5f6052f4e1f473dda63ff92fb": "c76cd967bd112c38725e56c4b5556c08",
".git/objects/11/488f071817694754691b1aa10821b26c69c8b9": "7870671e9e6d7f19f007d578e08d89ed",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/16/b39e78000447cf94ddff2c6a870ffbb082f40e": "f16b3d8d51e65eae78f39f1e3f8f3122",
".git/objects/17/057a2bf7ab4bbc33ab2c291ecb29becf0086cd": "951b55187715cd1be96f9d5be8e04450",
".git/objects/22/349af98f68e384c82a071697dbc46cd862647e": "6a2d9abbb3d52820e2fd391061df3646",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/25/7b4f14b24152586b0f96b1286056afc7018042": "3220190d620368bdc11772b680c0bb64",
".git/objects/26/a8fd8779814723cda024401d95330424549cd2": "5d950ee28a35fef11cead8718e626d57",
".git/objects/27/19c0dbad1417f016423d210fbe10dc0022935d": "05209fa0990330cc388c152e36a1345a",
".git/objects/28/5cf6b12b96effb1bb96e154c974a095d97c1a7": "ac7e4bc68a15fec42406a833a59a3f08",
".git/objects/2b/0efd84b90d395c074f98e4c630511077454641": "6b516cea10647920ee30a0519a18bbb8",
".git/objects/2b/ae8d6bc672b9f55f57c0a202d6cef0777fa9de": "9e608ec505f86d1d74da50b7620fc93f",
".git/objects/2b/d70942a8696a41796e994e410200e21edc6b87": "b73412453c1989680b871606ef0beb94",
".git/objects/2c/84d6aad746d49a64fd8e44b4b39dac841a01b0": "10ec38c435eae67c3e368ac929b339be",
".git/objects/2d/eea92f709f4816cc3839357a5c3f4f7010d297": "e7fc45e6c9781a350961074d08427dc2",
".git/objects/31/ce54db4c74002d504250bf3abba56e3063845d": "3598dc03bdba2c32b3782ac6b4b76420",
".git/objects/33/17e0de3990fbdd9224dedddd027dfe9aef8703": "ccfe882fddbb6e6ac666e0c548dfdeef",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/40/1635afb6c948ae71b64bef42e963f0733b7149": "b1c38bc6551a0615962b02d8790988f8",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/48/aa181130852371abeea2ba38da334e598fe762": "0d2df2cd47ab8f295533b6af599a676f",
".git/objects/49/3d56df32a0854837e2da29fa8d9bd77f25ce4b": "22b02c8741f7073c402bc2ae3a7c9304",
".git/objects/4a/68c16bd50230b359786bfbdd16628fcc5860d9": "6cdb127138dbff2269937cc5d90dc4c3",
".git/objects/4b/72f0266948483f0e678a32ff20fe6c39431620": "bed05223b1c241fb534ab82f71801b28",
".git/objects/4b/b32e026775f8970b9a02c88d3231251599f4a6": "c404e6886a19d6f30bd9dff4cad8ddae",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/50/d2d0e6e8c432b3105dabbce7df3823fced07e7": "94dba91561e67cc104919d1f0142fca7",
".git/objects/50/dd9f8b6d8ef58919e6238dfe3a16c52686e19f": "a4c5e06699f3bd891837f7b4c08cd4c0",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/56/440d9e0e5617175d2b688f282e685259553626": "ced7ec9b8d1232055fbd646ca1bbd576",
".git/objects/57/c828ccd2bdfd6b8abf72865f4bb479920cdf1d": "e1f1c487c80b905e7b66f71eb8dfc823",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/59/c54f324d71cf37b4d1b4bbfc87dfd19b55bfc3": "ff5990e192c55d3cdd1c5325b08352e2",
".git/objects/5d/5b189d1de6b446d15498fb13e1c293b5a97d76": "e88721d0e1b96d5c10f31b2d1f65a30e",
".git/objects/60/e9cd7a568541e89ce5bce2ed827998de55892d": "23a2de4aa6e459df81817bdca7df81cb",
".git/objects/61/c1de2af475cfa4cf28ac61d6194ac96454372f": "ad460192ab570a11267eb7e81554488a",
".git/objects/63/f289e084bfd80a0cf3ef51add823cc8489c175": "84835ba543fef724152837f40c27805a",
".git/objects/64/5598a9293133bffe4edc39db7f82cf9c992261": "9657850bb232e2e05539770a2015ad26",
".git/objects/64/8c1795dee5c328e85b8eec47459ace6c6b3afc": "a062775540eed7e810765a8d0e06a493",
".git/objects/67/4350c38f722306f6614fbe7dbe8e3a70a6d201": "86f9d7a19ecd693444fc4b626f3b57f7",
".git/objects/67/be528bed4a953945254bdda546983db784608d": "e9ee7df410acaa010e7edc65710613bf",
".git/objects/68/65c2a55d92d37438e8ef0fd13e2b08b692fd59": "de24f5e463a8271ea77320120dcfd4c6",
".git/objects/69/34ecccd59daf40246586199e8eac53ab0d21db": "ca2bf56270ef0d6bd50502d17869f63f",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/72/9d558bc0cc5ac6dae56d7d46ed36686f0805f8": "7ece4dd887bdd55ddd31b8bb4c18886b",
".git/objects/72/ec618ceedf49ccc68e213a27f3913ee3aef449": "8af0e3e0265cb8ac0cff294b2f0fd345",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/76/39b263c0a90b758f818ac1731d7a7767e6fe0b": "12a44ee425d1bc4c08511f23db87fa18",
".git/objects/76/dd5c71d73fb0c63c7a0fa4495b6d60fd317dd3": "36f66e0df344f164a51c24fd371a3b01",
".git/objects/78/84a0057068a8141bd9e19c08340b5cc65005f1": "befc5a24129d4d5fd8fc3d612a83430c",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/7ffb392a3f6baeee778d5c314b6650148803fb": "8be5788d5d9481f6146ed4b11d3a2c94",
".git/objects/7c/18e1328436516507fd05cb5113165652c08b4a": "f738adc7744e8fd9f97bca524113e9a0",
".git/objects/7c/7df7fa805220c9165353c6cfa89400a17de88b": "cf4feb7a7a4698b22c56a7628b5d64be",
".git/objects/80/9ad778e64ac243f8073549409747cff2a91242": "d8ae559938bd76b3c5ddf2f4fd44fdc5",
".git/objects/81/d88cea03a8788780af921756c7405f5abd1430": "92f07c0c51b830a8fce154ca152a30fb",
".git/objects/82/b349301039f348952b9cba7133da5f8b368ae3": "c4a163166f94ba4d0439667b9046811d",
".git/objects/83/746feffe7eafff6f7262da84e4cd354e6c55e0": "563ece7f4e0c90b10b60419d2f496156",
".git/objects/88/0c4fbbc871d6f7c8bacc2b6acc4ceea81b63ad": "8cffa626dc00bffac0514b67f5f59ce4",
".git/objects/88/1fc1e185281160cb16a7f060c5dcf78bba9c6b": "37bc47f87a61fac47f2412f8340027e7",
".git/objects/88/3843104d0b5ba8f72e6dfc432813674de852e8": "96c63ae33c333cc08416077fd00682f4",
".git/objects/88/55723dbf97409149c2d5f176e72af559c6a477": "4a0a70e0d2d7e40179869b1ba78f7b28",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/603797d5b00813fb2d331bc15678ea3d065514": "ada7acf8d0b8a8fc142b97a6cc025c84",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/8d/1712832a19a8ae7548825632d4ccc129a89041": "a6bbb16eecdc6057110aaf4b45f327c3",
".git/objects/91/1775ec21f34f407a02949c201d0e82e947e247": "d0e924203077946058068b82a16c5401",
".git/objects/91/7cb8585120bcbe4efba10dd0f12a81f95070c6": "b139de299f9a5d0c5064f821bb179890",
".git/objects/94/135a209a82ee537eab4cc4f6c62d4879ae3a41": "d681b293d7cf8cf501d6d63511ee3503",
".git/objects/96/9cb9657c8f33364a2c8681a57530cf5b33de65": "2cf9b6f27457ebbfebdd6440986b9f24",
".git/objects/98/76a0e22f2019c04f38bc56bc7a151385b2d09e": "07fd94b3289e928e601ea76a2321a449",
".git/objects/99/357a098d843da6391817e4a147dbc87c7a977d": "af6e41a0b1f2e72cc76cacb98f45b026",
".git/objects/9b/502b7c3f980d0739b305d87dedafa2ceaf4cfb": "3ed2b9866983ae46757930f7d4f1b3ec",
".git/objects/9b/992d017af3db2c96570df9898f443212f9fa70": "6d1ca14a624928b7e3c3a9442b436044",
".git/objects/9c/402e24e5e89fef4c2a92334670a3ca2a0016f8": "25ef7a18854eb711e69f33bd18c9a5f5",
".git/objects/9d/322d2a875d0814bf9cf46eb70425fb004c68e3": "e50b9b075a6dd3c177df468c3186db17",
".git/objects/9e/4f66968ec09369fe3b0e3042ff7eba7f0dfab0": "fad4ef3bb8ca810098dab4dffdfa1117",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a2/fba7c5e7b31c01f54281bd3972091682d91fb5": "d80630693462baf8e664a5f906e498f3",
".git/objects/a3/6ba4e3325a532cd181f887a4c40a2d8b5dd218": "5a057b91b9f2a002d4a802d9c02c4723",
".git/objects/a4/939815025f5745778b46e3e751d04e9a54fc3d": "3193455450b8ff8ac311b93a2ded216a",
".git/objects/a8/c6daa55780664dc78e6be9627e59651b439093": "39406c183cd48076a0c1d04b1dd43e4d",
".git/objects/a9/91f51138ffe059d588003dc7936aff059a0428": "b73a35563fa129bd884d8b5c53ee9231",
".git/objects/aa/f9775aa89c03137dbf48721cdc05191703de5e": "25802b31f0bee36b4e1a7a67835f99f0",
".git/objects/ab/4fcaa8f39e9ef7d7b6fef2d02e4e137d6e2a1a": "571380f79b06a20343acc2e599ab232b",
".git/objects/ab/915743e29570ab74ab151b1b164866e937d982": "d7a5eebd6f1f84e93bdedc1ca224b0aa",
".git/objects/ad/2f90b78480aeb6608226d9db4ecbd3ec06aaeb": "4add97a99941aa0e9eed0f2173416ade",
".git/objects/ad/6774ef8fdf9f4acde7c730d4a923aae61daf2a": "924bdaaf3f736d71d7e58adad618dc33",
".git/objects/b0/cf4038da20b7ceff0cd38a54e9c9c0d59f787f": "04d83e5075345a6a02fa8064662df415",
".git/objects/b2/04d5af8ed9c39871c26ba706d3097941a5be8e": "10a38597b26060ac05ae40f25eee2ba0",
".git/objects/b3/8d19d20900d432903dd1b67622902a76b1da08": "4b9f240987041fd9bf1ce82f79459ce2",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/64a7e72573c5d93daed81abd94347a5a64cbad": "430bd4ecc307d0d64defc8107e6c4268",
".git/objects/b8/3cbfba36ab6251b1f173e8e50a3578a51b4c78": "0416228e057a6b67b04244e413d5be5a",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/2c0494e81c7327ae3af6486089fee078e9d492": "568148cae2bf00a0f8229a7f1c87f555",
".git/objects/bb/3d45de344b06f4071601e1061819f215c9a8f7": "6ecbb8c50410c6b3901a9d47359dd9db",
".git/objects/be/35fca5b0ff15ced3673551b9b075423881c1ce": "2c120dcd4b95c900b0df756dcabd99f3",
".git/objects/be/8aacdbbf40aa56612d7fc65f3e32163d77b514": "f7e8e7ea93bce549d5b33baf3bef5859",
".git/objects/be/bb8f5f37d1b3f4d282870c3fce91182f450824": "badb3274a35bb7e75b42c227010572af",
".git/objects/c1/c315cbb82b722d6960cb9e7a01b368df52a4ce": "177b4f978f601bf2e27eeb29aade4281",
".git/objects/c4/7193cc0fce6e8a5ef00ee558e5c4ecb7265dd1": "befc0cade958248143cee2c10de26e8d",
".git/objects/c5/16376834e67587e093d01c04955c3729a89fc1": "fbf6522e19ad061011c886d3b058fdc6",
".git/objects/cc/4493727474717e6109f185e6e17b40da22b660": "5d16d3aecf5c629931072c978ceb2bb9",
".git/objects/cc/fab74c1f56c330985060e2247607eaedb3c7d7": "ad5b6117df489509af208438785f208b",
".git/objects/cd/71e992ccea42b2a18e1eeafbf9e4b629b2b37c": "784f7728e10b0a6c6ffb924fcc46ea5a",
".git/objects/cf/1eb87ab13223b58d9eabebea91d7a233e20c5d": "ee86d135b52773c16e96c3fa6a483aaf",
".git/objects/d2/7c554abe49d7ce8ba90c799033b925f6ca2fca": "983897ce09403c9e09cb4e34aaa55f82",
".git/objects/d3/96c792480371489253da2b7005e556f4af3f05": "9304b050963a59e2f5924f3b43c7b6b3",
".git/objects/d4/d3c6f3d4ef7a9c02e7f2e064f8ceae4f6b865b": "b3c01623c0558abc14262410e7a220f9",
".git/objects/d5/bdc48a848d5beddeaadd935c0b1510356a3f42": "7876bcfe2a8ef4b016ac7983510d44ad",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/2b061e430703229657963ad9ba702b18e0d340": "8cc0f6310195ec2fc8f5cc7ba2cefbb8",
".git/objects/d8/3720b8ee5be4039d37e28a9df60b90d6dbd36a": "8d196faecffb606916a3104c4f283c69",
".git/objects/db/22fbb91645600fde1305e3aa9a9714afb12fef": "7ffb0641e264115b7f410582b26a837d",
".git/objects/db/b6e738007383128bdf535d4b0e5285e5e64e43": "67e9078fb0e34713847186428997f22f",
".git/objects/dc/75e3e35c01460a04e69e0dc245e28ede43a08d": "56da7451330670620414b648ee975af5",
".git/objects/de/8d0a37c63ead74572fb48810bb86f8db683eb0": "883e092e17f1e46d4619668f9e1c9c36",
".git/objects/de/ef21a1eba0b0a3651f93bb600fc909ec1e3bce": "4c61475a7f867247e5a09acc0bab5a05",
".git/objects/e4/9704db19dc34a7541ab85f629c1a8bb4778d2e": "f4d3ecc87ab49ea907ce4d6585236bed",
".git/objects/e4/c623c747c68e8b4ed065ef0bcbe5052cbcd357": "86a9f997958a7a62127944764f0fd0d7",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/ce9c944c34da5d8964cf1f7fca785ed6e9e755": "e3c34582c1e6bb11ee0206ff20275f72",
".git/objects/e7/0c7dde0fcbdd29b8152e018226b197b5d77b7b": "8c9bb2f34faa3f1b1b82878f4a4a8a43",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/572a8b5759b9dc405caaff018e479c797b3902": "8a89bc28e8851740ea469c8ea45bfdab",
".git/objects/ee/9c411e077d40834f2160ad107ce1920ef57eb1": "c9a23604bf6364997b520dfc1540808b",
".git/objects/f0/9724ee15803c60280996e9c8be4daffa18c4ea": "7a7615ceeaf21ca3c7fe3026105a54af",
".git/objects/f0/ef0e022ca42d0d94d7ca8dd4ce66c2ba526a93": "179d62cf56faf774e291bc81afdee26b",
".git/objects/fc/c8b574a47ff707fa58b88e39d6ce42fbf89fa2": "594c63b834ab0f707da9803ac6c28562",
".git/objects/fe/3914bcf3baf9d87a873a444cac8aaf9dcd54c1": "372add7dd6cdabc32b9333e8d66bff72",
".git/objects/ff/29e84f21e52b5f011bd612d2e7b13821397900": "0edfd090334ebfcf8aaf66088a2529ed",
".git/objects/ff/a04af7377901be9034b15b88fffae5bb27d05d": "63f525c95575bed309eccd866a096c7b",
".git/refs/heads/master": "c16a711213309ca7f3384e90ebeeae8f",
".git/refs/remotes/origin/master": "c16a711213309ca7f3384e90ebeeae8f",
"assets/AssetManifest.bin": "c5eb1c349af7b14561446379cc9454b3",
"assets/AssetManifest.json": "77cd6f518c0760b6503cba9f7ff02bf0",
"assets/assets/icons/appstore.svg": "0ff5cc1e52a81517ab19df4e9c77b156",
"assets/assets/icons/behance.svg": "35ad2d47e647d0b168e7707b2984c6b5",
"assets/assets/icons/bloc.png": "977fbfba561065f9a68c4b47f9774531",
"assets/assets/icons/check.svg": "4220c82511cc1dfb40b8bba7d25c5f55",
"assets/assets/icons/dart.png": "1ab71d33e7ba834836197b4fa8726da0",
"assets/assets/icons/download.svg": "628700a3031424d215a441fab2da1731",
"assets/assets/icons/dribble.svg": "d392567c5678d42472d2c7b766268101",
"assets/assets/icons/firebase.png": "36170822afe4c716cfbdb96dac8cd10e",
"assets/assets/icons/flutter.png": "1105c9a994c1a6638daed558d5b631fd",
"assets/assets/icons/github.svg": "9226aa209923e38c0a6ddcb236e2bc68",
"assets/assets/icons/linkedin.svg": "5b2195ddf9e879047dd8a163c4194920",
"assets/assets/icons/playstore.svg": "bd8f2843df647e82df054df459b65bb1",
"assets/assets/icons/twitter.svg": "a4a0163fef48a4247a305528c07bc4fa",
"assets/assets/images/image.png": "9fb5704e719f93940bba93d69ebbd5cb",
"assets/assets/images/profile.png": "fc39f1d0d29bfe679f5fc2930c48c1b0",
"assets/assets/images/triange_icon.png": "086ab5ca50d3e558e3307ff009975083",
"assets/assets/videos/cleanArchitecture.mp4": "b8b434575971a4fa6f41a90b47e4885e",
"assets/assets/videos/contracts.mp4": "c394359d5e08cc1dbf2fafcf0529ee28",
"assets/assets/videos/damasInRestaurant.mp4": "64c01353d15ac9e7f862ef78bc896d60",
"assets/assets/videos/damasRestaurant.mp4": "573d57ab88458c71e1ad3e5bdf527983",
"assets/assets/videos/doctorBooking.mp4": "890bdd3e25180bb29030a6018afdefb8",
"assets/assets/videos/notes.mp4": "cf184cdc071b4c7872475b69259eafc2",
"assets/assets/videos/notifications.mp4": "68ec38b17891843a4ea8c7334ce0e9eb",
"assets/assets/videos/party.mp4": "4e75e792930eb6b75b9cfb490fe3ff65",
"assets/assets/videos/repair.mp4": "bc9b934a6f1ca8f65a80d83efe7f8c01",
"assets/assets/videos/sportWithFriends.mp4": "72765b6be8594302434c6da5ddc1a9aa",
"assets/assets/videos/tracking.mp4": "09a188023ff0d37d460efb734228f503",
"assets/assets/videos/video.mp4": "6a557c7554ff24ee35447ae09af4f9fa",
"assets/assets/videos/warhouseManagement.mp4": "2e6f404dd11196fdf0858c712cb3640b",
"assets/assets/videos/weather.mp4": "9d32f696fa9959fa55b90cc664334582",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "72a42f0e35be2f211bd3d9cd8fff1bc4",
"assets/NOTICES": "e9246f2bc878118d060b2f2051961cd4",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "f2163b9d4e6f1ea52063f498c8878bb9",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "0db203e8632f03baae0184700f3bda48",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "01bb14ae3f14c73ee03eed84f480ded9",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "efc6c90b58d765987f922c95c2031dd2",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "19d8b35640d13140fe4e6f3b8d450f04",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "1165572f59d51e963a5bf9bdda61e39b",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "1ef9369e2f3d742826d9092964168b7b",
"/": "1ef9369e2f3d742826d9092964168b7b",
"main.dart.js": "ed7fb2bd9b64c552e2224e3af715becd",
"manifest.json": "e74af8957b5899dc6da961caee768ec9",
"version.json": "009c9e65172e010890f7f65fde438006"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
