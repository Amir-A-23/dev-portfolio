module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			keyframes: {
				wave: {
					'0%': { transform: 'rotate(0.0deg)' },
					'15%': { transform: 'rotate(14.0deg)' },
					'30%': { transform: 'rotate(-8.0deg)' },
					'40%': { transform: 'rotate(14.0deg)' },
					'50%': { transform: 'rotate(-4.0deg)' },
					'60%': { transform: 'rotate(10.0deg)' },
					'70%': { transform: 'rotate(0.0deg)' },
					'100%': { transform: 'rotate(0.0deg)' },
				},
			},
			animation: {
				wave: 'wave 1.5s infinite',
			},
			margin: {
				320: '320px',
			},
			width: {
				190: '190px',
				275: '275px',
				300: '300px',
				340: '340px',
				350: '350px',
				656: '656px',
				880: '880px',
				508: '508px',
			},
			height: {
				80: '80px',
				340: '340px',
				370: '370px',
				420: '420px',
				510: '510px',
				600: '600px',
				685: '685px',
				800: '800px',
				'90vh': '90vh',
			},
			colors: {
				navBar: '#1d1e25',
				primary: '#121316',
				textBase: '#8f9091',
			},
		},
	},
	plugins: [require('daisyui')],
};
