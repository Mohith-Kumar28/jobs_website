import { Combobox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { useState,Fragment } from 'react'

const people = [
    { id: 1, name: '$80k+' },
    { id: 2, name: '$100k+' },
    { id: 3, name: '$120k+' },
    { id: 4, name: '$140k+' },
    { id: 5, name: '$160k+' },
    { id: 6, name: '$180k+' },
    { id: 7, name: '$200k+' },
    { id: 8, name: '$220k+' },
    { id: 9, name: '$240k+' },
    { id: 10, name: '$260k+' },
    { id: 12, name: '$280k+' },
    { id: 13, name: '$300k+' },
    { id: 14, name: '$320k+' },
    { id: 15, name: '$340k+' },
    { id: 11, name: '$360k+' },
    { id: 16, name: '$380k+' },
    { id: 17, name: '$400k+' },
    { id: 18, name: '$420k+' },
    { id: 19, name: '$440k+' },
    { id: 20, name: '$460k+' },
    { id: 21, name: '$480k+' },
    { id: 22, name: '$500k+' },
]

const Desired = () => {

    const [selected, setSelected] = useState(people[0])
  const [query, setQuery] = useState('')

  const filteredPeople =
    query === ''
      ? people
      : people.filter((person) =>
          person.name
            .toLowerCase()
            .replace(/\s+/g, '')
            .includes(query.toLowerCase().replace(/\s+/g, ''))
        )

    return (
        <div>
            
            <div className=" pb-6">
      <Combobox value={selected} onChange={setSelected}>
        <div className="relative mt-1">
          <p className="leading-7 text-sm text-gray-600">Desired Salary</p>
          <div className="relative w-full cursor-default overflow-hidden rounded-md bg-white text-left border border-gray-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
            <Combobox.Input
              className="w-full border-none py-3 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
              displayValue={(person) => person.name}
              onChange={(event) => setQuery(event.target.value)}
            />
            <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </Combobox.Button>
          </div>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery('')}
          >
            <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-green-300 ring-opacity-5 focus:outline-none sm:text-sm z-10">
              {filteredPeople.length === 0 && query !== '' ? (
                <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                  Nothing found.
                </div>
              ) : (
                filteredPeople.map((person) => (
                  <Combobox.Option
                    key={person.id}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active ? 'bg-teal-600 text-white' : 'text-gray-900'
                      }`
                    }
                    value={person}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? 'font-medium' : 'font-normal'
                          }`}
                        >
                          {person.name}
                        </span>
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active ? 'text-white' : 'text-teal-600'
                            }`}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>


        </div>
    )
}

export default Desired
