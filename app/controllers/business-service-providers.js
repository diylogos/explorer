import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['q', 'ita_offices', 'categories', 'page'],

  q: null,
  qField: Ember.computed.oneWay('q'),

  ita_offices: null,
  itaOfficesField: Ember.computed.oneWay('ita_offices'),

  categories: null,
  categoriesField: Ember.computed.oneWay('categories'),

  page: 1,
  pageField: Ember.computed.oneWay('pageField'),

  itaOfficesList: [
    'Australia',
    'Baltimore',
    'Bulgaria',
    'China',
    'Cleveland',
    'Colombia',
    'Costa Rica',
    'Croatia',
    'Denmark',
    'Dominican Republic',
    'Ecuador',
    'Egypt',
    'El Salvador',
    'European Union',
    'Germany',
    'Greece',
    'Guatemala',
    'Honduras',
    'India',
    'Ireland',
    'Italy',
    'Japan',
    'Jordan',
    'Kazakhstan',
    'Kuwait',
    'Mexico',
    'Nigeria',
    'Oman',
    'Philippines',
    'Poland',
    'Romania',
    'Russia',
    'San Francisco',
    'South Africa',
    'Thailand',
    'Turkey',
    'Ukraine',
    'United Arab Emirates',
    'United Kingdom',
    'Vietnam',
    'West Bank and Gaza'
  ],

  categoriesList: [
    'Accounting, Auditing and Tax Services',
    'Advertising',
    'Architecture, Interior Design and Furniture',
    'Banking and Financial Services',
    'Building and Construction Services',
    'Business Administration Services',
    'Business Associations',
    'Business Consulting',
    'Business Development',
    'Car Services and Rentals',
    'Chambers of Commerce',
    'Computer and Internet Services',
    'Customs Brokerage',
    'Debt Collection',
    'Distributors, Sales Agents and Importers',
    'Education and Training Services',
    'Electronic Components and Supplies',
    'Engineering Services',
    'Entertainment Services',
    'Environmental Services',
    'Event Management, Conference Equipment and Facilitation',
    'Export Management',
    'Graphic Design',
    'Hospitals, Clinics and Health Services',
    'Hotels and Meeting Facilities',
    'Human Resources',
    'Insurance Services',
    'Legal Services',
    'Manufacturing and Industrial Production Services',
    'Market Research',
    'Marketing, Public Relations and Sales',
    'Mining and Oil and Gas Services',
    'Office Furniture',
    'Office Rental',
    'Other Business Services',
    'Patent and Trademark Law Services',
    'Photographic Services',
    'Printing and Publishing Services',
    'Product Standards, Testing, and Certification',
    'Real Estate Services',
    'Regional Economic Development',
    'Relocation services',
    'Restaurants and Catering',
    'Retailers',
    'Security and Personal Safety',
    'Telecommunications',
    'Trade Show and Exhibition Services',
    'Translation and Interpretation',
    'Transportation, Freight Forwarder and Storage Services',
    'Travel Facilitation',
    'Vetting/Due Diligence'
  ]

});