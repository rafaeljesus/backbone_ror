module HtmlSelectorsHelpers
  def selector_for(locator)
    case locator
    when 'the page'
      'html > body'
    when 'the task form'
      'form#new-task'
    when 'the tasks list'
      'table#tasks-list'
    when /^"(.+)"$/
      $1
    else
      raise "Can't find mapping from \"#{locator}\" to a selector.\n" +
        "Now, go and add a mapping in #{__FILE__}"
    end
  end
end

World(HtmlSelectorsHelpers)
