"use client";

import { motion } from "framer-motion";

interface ComparisonTableProps {
  className?: string;
}

const ComparisonTable: React.FC<ComparisonTableProps> = ({ className = "" }) => {
  const checkIcon = (
    <div className="w-4 h-4 bg-[#4F7EFF] rounded-full flex items-center justify-center">
      <svg
        width="8"
        height="6"
        viewBox="0 0 8 6"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 3L3 5L7 1"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );

  const dashIcon = <span className="text-gray-400 text-lg">-</span>;

  return (
    <motion.div
      className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      {/* Main Comparison Table */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-8">
        {/* Table Header */}
        <div className="grid grid-cols-4 bg-gray-50 border-b border-gray-200">
          <div className="p-6 font-medium text-gray-900"></div>
          <div className="p-6 text-center">
            <h3 className="font-semibold text-[#4F7EFF] text-lg">Sinco</h3>
          </div>
          <div className="p-6 text-center">
            <h3 className="font-semibold text-gray-700 text-lg">Competitors</h3>
          </div>
          <div className="p-6 text-center">
            <h3 className="font-semibold text-gray-700 text-lg">Others</h3>
          </div>
        </div>

        {/* Table Rows */}
        <div className="divide-y divide-gray-100">
          {/* Editors */}
          <div className="grid grid-cols-4 hover:bg-gray-50 transition-colors">
            <div className="p-6 font-medium text-gray-900">Editors</div>
            <div className="p-6 text-center">
              <span className="text-[#4F7EFF] font-medium">Unlimited</span>
            </div>
            <div className="p-6 text-center">
              <span className="text-[#4F7EFF] font-medium">Unlimited</span>
            </div>
            <div className="p-6 text-center">
              <span className="text-[#4F7EFF] font-medium">Unlimited</span>
            </div>
          </div>

          {/* SQL Editors */}
          <div className="grid grid-cols-4 hover:bg-gray-50 transition-colors">
            <div className="p-6 font-medium text-gray-900">SQL Editors</div>
            <div className="p-6 text-center">
              <span className="text-[#4F7EFF] font-medium">3</span>
            </div>
            <div className="p-6 text-center">
              <span className="text-[#4F7EFF] font-medium">Unlimited</span>
            </div>
            <div className="p-6 text-center">
              <span className="text-[#4F7EFF] font-medium">Unlimited</span>
            </div>
          </div>

          {/* Data Metrics */}
          <div className="grid grid-cols-4 hover:bg-gray-50 transition-colors">
            <div className="p-6 font-medium text-gray-900">Data Metrics</div>
            <div className="p-6 text-center">
              <span className="text-[#4F7EFF] font-medium">Unlimited</span>
            </div>
            <div className="p-6 text-center">
              <span className="text-[#4F7EFF] font-medium">Unlimited</span>
            </div>
            <div className="p-6 text-center">
              <span className="text-[#4F7EFF] font-medium">Unlimited</span>
            </div>
          </div>

          {/* Reporting capabilities */}
          <div className="grid grid-cols-4 hover:bg-gray-50 transition-colors">
            <div className="p-6 font-medium text-gray-900">Reporting capabilities</div>
            <div className="p-6 text-center">
              <span className="text-gray-700 font-medium">1K</span>
            </div>
            <div className="p-6 text-center">
              <span className="text-gray-700 font-medium">10K</span>
            </div>
            <div className="p-6 text-center">
              <span className="text-gray-700 font-medium">Custom</span>
            </div>
          </div>
        </div>
      </div>

      {/* Segmentation and Management Section */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-8">
        {/* Section Header */}
        <div className="bg-gray-50 border-b border-gray-200 p-6">
          <h3 className="font-semibold text-gray-900 text-lg">Segmentation and management</h3>
        </div>

        {/* Section Content */}
        <div className="divide-y divide-gray-100">
          {/* Company attribute filters */}
          <div className="grid grid-cols-4 hover:bg-gray-50 transition-colors">
            <div className="p-6 font-medium text-gray-900">Company attribute filters</div>
            <div className="p-6 flex justify-center">{checkIcon}</div>
            <div className="p-6 flex justify-center">{checkIcon}</div>
            <div className="p-6 flex justify-center">{checkIcon}</div>
          </div>

          {/* Feature filters */}
          <div className="grid grid-cols-4 hover:bg-gray-50 transition-colors">
            <div className="p-6 font-medium text-gray-900">Feature filters</div>
            <div className="p-6 flex justify-center">{checkIcon}</div>
            <div className="p-6 flex justify-center">{checkIcon}</div>
            <div className="p-6 flex justify-center">{dashIcon}</div>
          </div>

          {/* Reusable segments */}
          <div className="grid grid-cols-4 hover:bg-gray-50 transition-colors">
            <div className="p-6 font-medium text-gray-900">Reusable segments</div>
            <div className="p-6 flex justify-center">{checkIcon}</div>
            <div className="p-6 flex justify-center">{dashIcon}</div>
            <div className="p-6 flex justify-center">{checkIcon}</div>
          </div>

          {/* Add in Bulk */}
          <div className="grid grid-cols-4 hover:bg-gray-50 transition-colors">
            <div className="p-6 font-medium text-gray-900">Add in Bulk</div>
            <div className="p-6 flex justify-center">{checkIcon}</div>
            <div className="p-6 flex justify-center">{dashIcon}</div>
            <div className="p-6 flex justify-center">{dashIcon}</div>
          </div>

          {/* SQL Editors */}
          <div className="grid grid-cols-4 hover:bg-gray-50 transition-colors">
            <div className="p-6 font-medium text-gray-900">SQL Editors</div>
            <div className="p-6 flex justify-center">{dashIcon}</div>
            <div className="p-6 flex justify-center">{dashIcon}</div>
            <div className="p-6 flex justify-center">{dashIcon}</div>
          </div>
        </div>
      </div>

      {/* Feature Analysis Section */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        {/* Section Header */}
        <div className="bg-gray-50 border-b border-gray-200 p-6">
          <h3 className="font-semibold text-gray-900 text-lg">Feature Analysis</h3>
        </div>

        {/* Section Content */}
        <div className="divide-y divide-gray-100">
          {/* Editors */}
          <div className="grid grid-cols-4 hover:bg-gray-50 transition-colors">
            <div className="p-6 font-medium text-gray-900">Editors</div>
            <div className="p-6 flex justify-center">{checkIcon}</div>
            <div className="p-6 flex justify-center">{checkIcon}</div>
            <div className="p-6 flex justify-center">{checkIcon}</div>
          </div>

          {/* SQL Editors */}
          <div className="grid grid-cols-4 hover:bg-gray-50 transition-colors">
            <div className="p-6 font-medium text-gray-900">SQL Editors</div>
            <div className="p-6 flex justify-center">{checkIcon}</div>
            <div className="p-6 flex justify-center">{checkIcon}</div>
            <div className="p-6 flex justify-center">{dashIcon}</div>
          </div>

          {/* Data Metrics */}
          <div className="grid grid-cols-4 hover:bg-gray-50 transition-colors">
            <div className="p-6 font-medium text-gray-900">Data Metrics</div>
            <div className="p-6 flex justify-center">{checkIcon}</div>
            <div className="p-6 flex justify-center">{dashIcon}</div>
            <div className="p-6 flex justify-center">{checkIcon}</div>
          </div>

          {/* Reporting capabilities */}
          <div className="grid grid-cols-4 hover:bg-gray-50 transition-colors">
            <div className="p-6 font-medium text-gray-900">Reporting capabilities</div>
            <div className="p-6 text-center">
              <span className="text-[#4F7EFF] font-medium">Unlimited</span>
            </div>
            <div className="p-6 text-center">
              <span className="text-gray-700 font-medium">50%</span>
            </div>
            <div className="p-6 text-center">
              <span className="text-gray-700 font-medium">20%</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ComparisonTable;